"use client";

import { motion } from "framer-motion";
import { IconSchool, IconCertificate, IconBook } from "@tabler/icons-react";

const educationData = [
    {
        title: "B.E. in Electronics & Telecommunication",
        institution: "TCET",
        year: "2022 - 2026",
        grade: "8.91 CGPA",
        description:
            "Pursuing Bachelor of Engineering with a focus on Electronics and Telecommunication.",
        icon: <IconSchool className="h-5 w-5" />,
        accentColor: "emerald",
    },
    {
        title: "Higher Secondary (12th)",
        institution: "Thomas Baptista Jr. College",
        year: "2020 - 2022",
        grade: "63.17%",
        description:
            "Completed Higher Secondary Education in Science stream.",
        icon: <IconCertificate className="h-5 w-5" />,
        accentColor: "blue",
    },
    {
        title: "Secondary (10th)",
        institution: "Nazareth Convent School",
        year: "2020",
        grade: "89%",
        description: "Completed Secondary Education.",
        icon: <IconBook className="h-5 w-5" />,
        accentColor: "violet",
    },
];

const accentMap: Record<string, { dot: string; badge: string; icon: string; border: string }> = {
    emerald: {
        dot: "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]",
        badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
        icon: "text-emerald-500",
        border: "hover:border-emerald-500/40 dark:hover:border-emerald-500/30",
    },
    blue: {
        dot: "bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]",
        badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
        icon: "text-blue-500",
        border: "hover:border-blue-500/40 dark:hover:border-blue-500/30",
    },
    violet: {
        dot: "bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.6)]",
        badge: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
        icon: "text-violet-500",
        border: "hover:border-violet-500/40 dark:hover:border-violet-500/30",
    },
};

export function Education() {
    return (
        <section id="education" className="mx-auto max-w-5xl px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="mb-16 text-center text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                    Education
                </h2>

                <div className="relative mx-auto max-w-3xl">
                    {/* Timeline line */}
                    <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-neutral-300 via-neutral-300 to-transparent dark:from-neutral-700 dark:via-neutral-700" />

                    <div className="space-y-10">
                        {educationData.map((item, index) => {
                            const accent = accentMap[item.accentColor];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.15,
                                    }}
                                    className="relative flex gap-6"
                                >
                                    {/* Timeline dot */}
                                    <div className="relative z-10 flex-shrink-0 pt-1">
                                        <div
                                            className={`h-[10px] w-[10px] rounded-full ring-4 ring-white dark:ring-neutral-950 ${accent.dot}`}
                                        />
                                    </div>

                                    {/* Card */}
                                    <div
                                        className={`group relative w-full rounded-xl border border-neutral-200 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 dark:border-neutral-800 dark:bg-neutral-900/80 ${accent.border} hover:shadow-lg hover:shadow-neutral-200/50 dark:hover:shadow-neutral-900/50`}
                                    >
                                        {/* Header */}
                                        <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 ${accent.icon}`}
                                                >
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                                                        {item.institution}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="mt-1 inline-flex w-fit items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 sm:mt-0">
                                                {item.year}
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className="mb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                                            {item.description}
                                        </p>

                                        {/* Grade badge */}
                                        <span
                                            className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium ${accent.badge}`}
                                        >
                                            {item.grade}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
