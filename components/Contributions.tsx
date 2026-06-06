"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function Contributions() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="contributions" className="mx-auto max-w-6xl px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
            >
                <h2 className="mb-12 text-center text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                    GitHub Contributions
                </h2>
                <div className="p-8 rounded-xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden">
                    {mounted ? (
                        <GitHubCalendar
                            username="pinank0301"
                            colorScheme={theme === "dark" ? "dark" : "light"}
                            fontSize={16}
                            blockSize={15}
                            blockMargin={5}
                        />
                    ) : (
                        <div className="h-[168px] w-full animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                    )}
                </div>
            </motion.div>
        </section>
    );
}
