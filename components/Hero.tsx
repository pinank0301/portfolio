"use client";

import React from "react";
import { motion } from "framer-motion";
import { EncryptedText } from "@/components/ui/encrypted-text";

export function Hero() {
    return (
        <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
            >
                <h2 className="mb-4 text-xl font-medium tracking-wide text-neutral-600 dark:text-neutral-400 sm:text-2xl">
                    <EncryptedText text="PINANK TRIVEDI" />
                </h2>
                <h1 className="bg-gradient-to-b from-neutral-800 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent dark:from-neutral-200 dark:to-neutral-500 sm:text-6xl md:text-7xl">
                    <EncryptedText text="Software Developer" /> <br />
                    <span className="text-3xl sm:text-5xl md:text-6xl">
                        <EncryptedText text="Python & Full-Stack Enthusiast" />
                    </span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                    <EncryptedText text = "Building impactful applications powered by AI, Next.js, and Python." />
                </p>
            </motion.div>
        </section>
    );
}
