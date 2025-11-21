"use client";

import { color, motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { features } from "process";

const projects = [
    {
        title: "Quick AI",
        description: "SaaS AI platform for content & media tools",
        tech: "React + Express + Gemini API + NeonDB + Clerk",
        features: [
            "Article writing",
            "Title generator",
            "Image editing (BG/object removal)",
            "Billing integration",
            "Modular UI",
        ],
        github: "https://github.com/pinank0301/QuickAI",
        live: "https://quickai-pin.vercel.app/",
        color: "#2664f5",
    },
    {
        title: "Soshable",
        description: "Volunteer & event management platform",
        tech: "React + Firebase",
        features: [
            "Real-time updates",
            "Volunteer registration",
            "Digital certificates",
        ],
        github: "https://github.com/pinank0301/The-Brute-Force",
        live: "https://the-brute-force.vercel.app/",
        color: "#f56426",
    },
    {
        title: "Gender & Age Recognition System",
        description: "Real-time live camera model",
        tech: "Python + OpenCV + Caffe",
        features: ["Tkinter GUI desktop app"],
        github: "https://github.com/pinank0301/Gender-and-Age-Detection",
        live: "https://github.com/pinank0301/Gender-and-Age-Detection",
        color: "#a826f5",
    },
    {
        title: "Estate Agent Website (Frontend UI Hackathon)",
        description: "Estate Agent Website made in 12 hours with no use of AI",
        tech: "React + Tailwind CSS + ShadCn + Zennit UI components",
        features: [
            "Framer Motion",
            "Chatbot Support for customers"
        ],
        github: "https://github.com/pinank0301/Zennit-Hackathon",
        live: "https://estate-agent-pro.vercel.app/",
        color: "#008000",
    },
];

export function Projects() {
    return (
        <section id="projects" className="mx-auto max-w-6xl px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="mb-12 text-center text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                    Featured Projects
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <CardSpotlight className="flex h-full flex-col p-6" color={project.color}>
                                <div className="mb-4 relative z-20">
                                    <h3 className="text-xl font-bold text-white">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-neutral-400">
                                        {project.tech}
                                    </p>
                                </div>
                                <p className="mb-4 flex-grow text-neutral-300 relative z-20">
                                    {project.description}
                                </p>
                                <ul className="mb-6 list-inside list-disc space-y-1 text-sm text-neutral-400 relative z-20">
                                    {project.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="mt-auto flex gap-4 relative z-20">
                                    <a
                                        href={project.github}
                                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-neutral-800 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
                                    >
                                        <Github className="h-4 w-4" />
                                        GitHub
                                    </a>
                                    <a
                                        href={project.live}
                                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white py-2 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        Live Demo
                                    </a>
                                </div>
                            </CardSpotlight>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
