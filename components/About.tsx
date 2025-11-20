"use client";

import React from "react";
import { motion } from "framer-motion";

export function About() {
    return (
        <section className="mx-auto max-w-4xl px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="mb-8 text-center text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                    About Me
                </h2>
                <div className="rounded-2xl border border-neutral-200 bg-white/50 p-8 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/50">
                    <ul className="space-y-4 text-lg text-neutral-600 dark:text-neutral-400">
                        <li className="flex items-start">
                            <span className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-neutral-500" />
                            Final-year ENTC engineering student at TCET
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-neutral-500" />
                            Passion for IT, AI, and software development
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-neutral-500" />
                            Experience working across Python, ML, JS, and full-stack projects
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-neutral-500" />
                            Technical leadership experience (IEEE Technical Lead)
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-neutral-500" />
                            I approach problems with a blend of analytical thinking and creative innovation, always eager to learn new technologies to build better solutions.
                        </li>
                    </ul>
                </div>
            </motion.div>
        </section>
    );
}
