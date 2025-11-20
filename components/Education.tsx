"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";

const educationData = [
    {
        id: 0,
        name: "B.E. in Electronics & Telecommunication",
        designation: "TCET | 2022 - 2026",
        content: (
            <p>
                Pursuing Bachelor of Engineering with a current CGPA of <span className="font-bold text-emerald-500">8.81</span>.
            </p>
        ),
    },
    {
        id: 1,
        name: "Higher Secondary (12th)",
        designation: "Thomas Baptista Jr. College | 2020 - 2022",
        content: (
            <p>
                Completed Higher Secondary Education with <span className="font-bold text-emerald-500">63.17%</span>.
            </p>
        ),
    },
    {
        id: 2,
        name: "Secondary (10th)",
        designation: "Nazareth Convent School | 2020",
        content: (
            <p>
                Completed Secondary Education with <span className="font-bold text-emerald-500">89%</span>.
            </p>
        ),
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
                <div className="flex items-center justify-center w-full">
                    <CardStack items={educationData} />
                </div>
            </motion.div>
        </section>
    );
}
