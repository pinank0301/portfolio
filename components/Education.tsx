"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconSchool, IconCertificate, IconBook } from "@tabler/icons-react";

const educationData = [
    {
        id: 0,
        title: "B.E. in Electronics & Telecommunication",
        institution: "TCET",
        year: "2022 - 2026",
        grade: "8.81 CGPA",
        description: "Pursuing Bachelor of Engineering with a focus on Electronics and Telecommunication.",
        icon: <IconSchool className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />,
    },
    {
        id: 1,
        title: "Higher Secondary (12th)",
        institution: "Thomas Baptista Jr. College",
        year: "2020 - 2022",
        grade: "63.17%",
        description: "Completed Higher Secondary Education in Science stream.",
        icon: <IconCertificate className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />,
    },
    {
        id: 2,
        title: "Secondary (10th)",
        institution: "Nazareth Convent School",
        year: "2020",
        grade: "89%",
        description: "Completed Secondary Education.",
        icon: <IconBook className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />,
    },
];

export function Education() {
    return (
        <section id="education" className="mx-auto max-w-5xl px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
            >
                <h2 className="mb-12 text-center text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                    Education
                </h2>

                <div className="relative w-full max-w-3xl pl-8 md:pl-0">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 h-full w-0.5 bg-neutral-200 dark:bg-neutral-800 md:left-6"></div>

                    <div className="space-y-12">
                        {educationData.map((item) => (
                            <div key={item.id} className="relative flex flex-col gap-6 md:flex-row md:gap-8">

                                {/* Icon/Dot */}
                                <div className="absolute left-0 -translate-x-1/2 md:left-6">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="ml-8 md:ml-16">
                                    <div className="flex flex-col items-start text-left">
                                        <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">{item.title}</h3>
                                        <div className="mb-2 mt-1 flex flex-wrap items-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                                            <span>{item.institution}</span>
                                            <span>•</span>
                                            <span>{item.year}</span>
                                        </div>
                                        <p className="mb-2 text-neutral-600 dark:text-neutral-400">{item.description}</p>
                                        <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                                            {item.grade}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
