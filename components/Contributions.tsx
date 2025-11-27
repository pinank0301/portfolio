"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function Contributions() {
    const { theme } = useTheme();

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
                    <GitHubCalendar
                        username="pinank0301"
                        colorScheme={theme === "dark" ? "dark" : "light"}
                        fontSize={16}
                        blockSize={15}
                        blockMargin={5}
                    />
                </div>
            </motion.div>
        </section>
    );
}
