"use client";

import { motion } from "framer-motion";
import {
    IconBriefcase,
    IconCode,
    IconTrophy,
    IconUsers,
} from "@tabler/icons-react";

const experiences = [
    {
        role: "Software Developer Intern",
        company: "Capgemini",
        duration: "Dec 2025 – Apr 2026",
        description: [
            "Built a microservices-based e-commerce platform using Java Spring Boot, implementing secure JWT authentication and REST APIs.",
            "Optimized 6 backend services, achieving 35% faster API performance and 20% fewer server errors.",
            "Developed an AI-driven recommendation engine that increased user engagement by 25% and reduced support requests by 30%.",
            "Worked on enterprise-grade backend development, microservices architecture, and Generative AI integration.",
        ],
        tech: ["Java", "Spring Boot", "Microservices", "JWT", "REST API", "Gen AI"],
        icon: <IconBriefcase className="h-5 w-5" />,
        accentColor: "emerald",
    },
    {
        role: "Python Development Intern",
        company: "CommuneEquation Media Pvt. Ltd.",
        duration: "Summer 2024",
        description: [
            "Worked on Python modules for data processing and automation pipelines.",
            "Implemented features, optimized scripts, and resolved complex debugging issues.",
            "Collaborated in agile team workflows and contributed to sprint deliverables.",
        ],
        tech: ["Python", "Data Processing", "Automation"],
        icon: <IconCode className="h-5 w-5" />,
        accentColor: "blue",
    },
    {
        role: "Technical Lead",
        company: "IEEE TCET",
        duration: "2023 – 2024",
        description: [
            "Led technical initiatives & built the chapter's official website.",
            "Managed infrastructure setups and worked on programming projects.",
            "Conducted technical events and mentored junior members.",
        ],
        tech: ["Leadership", "Web Dev", "Event Management"],
        icon: <IconUsers className="h-5 w-5" />,
        accentColor: "violet",
    },
    {
        role: "Hackathon Participant",
        company: "SIH & Others",
        duration: "2023 – Present",
        description: [
            "Built innovative solutions under tight time constraints across multiple hackathons.",
            "Gained hands-on experience with real-world application development and rapid prototyping.",
        ],
        tech: ["Problem Solving", "Rapid Prototyping", "Teamwork"],
        icon: <IconTrophy className="h-5 w-5" />,
        accentColor: "amber",
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
    amber: {
        dot: "bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.6)]",
        badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
        icon: "text-amber-500",
        border: "hover:border-amber-500/40 dark:hover:border-amber-500/30",
    },
};

export function Experience() {
    return (
        <section id="experience" className="mx-auto max-w-5xl px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="mb-16 text-center text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                    Experience
                </h2>

                <div className="relative mx-auto max-w-3xl">
                    {/* Timeline line */}
                    <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-neutral-300 via-neutral-300 to-transparent dark:from-neutral-700 dark:via-neutral-700" />

                    <div className="space-y-10">
                        {experiences.map((exp, index) => {
                            const accent = accentMap[exp.accentColor];
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
                                        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 ${accent.icon}`}
                                                >
                                                    {exp.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                                                        {exp.company}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="mt-1 inline-flex w-fit items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 sm:mt-0">
                                                {exp.duration}
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <ul className="mb-4 space-y-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                                            {exp.description.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex gap-2"
                                                >
                                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tech badges */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className={`rounded-md border px-2.5 py-0.5 text-xs font-medium ${accent.badge}`}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
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
