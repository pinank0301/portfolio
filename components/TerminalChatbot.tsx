"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconTerminal2, IconMinus, IconX, IconSend } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export function TerminalChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hello! I'm Pinank's virtual assistant. Ask me anything about his projects, skills, or experience." }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "Error: Connection terminated. Please check your API configuration." }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && !isMinimized && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-[350px] overflow-hidden rounded-lg border border-neutral-800 bg-black shadow-2xl dark:border-neutral-700 sm:w-[400px]"
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between bg-neutral-900 px-4 py-2 border-b border-neutral-800">
                            <div className="flex items-center gap-2">
                                <IconTerminal2 className="h-4 w-4 text-green-500" />
                                <span className="text-xs font-mono text-neutral-400">pinank@portfolio:~/chat</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsMinimized(true)}
                                    className="rounded p-1 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                                >
                                    <IconMinus className="h-3 w-3" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="rounded p-1 hover:bg-red-900/50 text-neutral-400 hover:text-red-400 transition-colors"
                                >
                                    <IconX className="h-3 w-3" />
                                </button>
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <div className="h-[400px] overflow-y-auto p-4 font-mono text-sm scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent">
                            <div className="space-y-4">
                                {messages.map((msg, idx) => (
                                    <div key={idx} className="flex flex-col gap-1">
                                        <span className={cn(
                                            "text-xs font-bold",
                                            msg.role === "user" ? "text-blue-400" : "text-green-500"
                                        )}>
                                            {msg.role === "user" ? "visitor@web:~$" : "pinank@ai:~$"}
                                        </span>
                                        <p className="text-neutral-300 whitespace-pre-wrap leading-relaxed">
                                            {msg.content}
                                        </p>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-bold text-green-500">pinank@ai:~$</span>
                                        <span className="animate-pulse text-green-500">_</span>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="border-t border-neutral-800 bg-neutral-900/50 p-2">
                            <div className="flex items-center gap-2 rounded bg-black px-3 py-2 border border-neutral-800 focus-within:border-neutral-600 transition-colors">
                                <span className="text-green-500 font-mono text-sm">{">"}</span>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type a command..."
                                    className="flex-1 bg-transparent font-mono text-sm text-white placeholder-neutral-600 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="text-neutral-500 hover:text-green-500 transition-colors disabled:opacity-50"
                                >
                                    <IconSend className="h-4 w-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                layout
                onClick={() => {
                    setIsOpen(true);
                    setIsMinimized(false);
                }}
                className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-green-500 shadow-lg border border-neutral-800 transition-all hover:bg-neutral-800 hover:scale-110",
                    isOpen && !isMinimized ? "hidden" : "flex"
                )}
            >
                <IconTerminal2 className="h-6 w-6" />
            </motion.button>
        </div>
    );
}
