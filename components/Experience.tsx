"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const experiences = [
    {
        role: "Python Development Intern",
        company: "CommuneEquation Media Pvt. Ltd.",
        description: [
            "Worked on Python modules for data processing",
            "Implemented features, optimized scripts, debugging",
            "Collaborated in team workflows",
        ],
    },
    {
        role: "Technical Lead",
        company: "IEEE TCET",
        description: [
            "Led technical initiatives & website building",
            "Managed setups, worked on programming projects",
            "Conducted technical events",
        ],
    },
    {
        role: "Hackathon Participant",
        company: "SIH & Others",
        description: [
            "Built solutions under time constraints",
            "Experience with real-world apps",
        ],
    },
];

export function Experience() {
    return (
        <section id="experience" className="mx-auto max-w-6xl px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="mb-12 text-center text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                    Experience
                </h2>
                <div className="relative mx-auto max-w-4xl">
                   
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-neutral-200 dark:bg-neutral-800 md:left-1/2 md:-translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={cn(
                                "relative mb-12 flex flex-col md:flex-row",
                                index % 2 === 0 ? "md:flex-row-reverse" : ""
                            )}
                        >
                            
                            <div className="absolute left-4 top-0 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-neutral-800 dark:border-neutral-900 dark:bg-neutral-200 md:left-1/2" />

                           
                            <div className={cn(
                                "ml-12 md:w-1/2 md:ml-0",
                                index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                            )}>
                                <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 text-left">
                                    <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                                        {exp.role}
                                    </h3>
                                    <p className="mb-4 text-sm font-medium text-emerald-500">
                                        {exp.company}
                                    </p>
                                    <ul className="list-disc space-y-2 text-sm text-neutral-600 dark:text-neutral-400 pl-5">
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
