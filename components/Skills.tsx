"use client";

import { motion } from "framer-motion";

const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Shadcn",
    "Next.js",
    "Express.js",
    "Node.js",
    "MongoDB",
    "SQL",
    "PostgreSQL",
    "Langchain",
    "AWS",
];

export function Skills() {
    return (
        <section id="skills" className="mx-auto max-w-5xl px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-start"
            >
                <h2 className="mb-8 text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                    SKILLS
                </h2>
                <div className="flex flex-wrap gap-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="border border-neutral-800 px-4 py-2 text-lg font-bold text-neutral-700 dark:border-neutral-200 dark:text-neutral-200"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
