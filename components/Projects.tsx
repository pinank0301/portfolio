"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { useRef, useState, useEffect } from "react";

const projects = [
    {
        title: "Postcn",
        subtitle: "Create Mock API's with simple text prompt",
        description: "Built an AI Agent that lets you create Mock API collection with just simple text prompt. You can also test this API's in realtime and share it wth your friends.",
        image: "/proj_img/postcn.png",
        github: "https://github.com/yashrajvrma/mock-api",
        live: "https://github.com/yashrajvrma/mock-api",
    },
    {
        title: "BeAware",
        subtitle: "Visual phishing detection system",
        description: "Built a visual phishing detection system that compares any given URL with the official brand website to identify impersonation. It analyzes UI layout, design patterns, domain tricks (like rn → m), SSL signals, and content similarity to uncover fake sites that look authentic. Generates a detailed analysis report and delivers a clear verdict: Safe / Suspicious / Dangerous.",
        image: "/proj_img/be_aware.png",
        github: "https://github.com/pinank0301/be-aware-frontend",
        live: "https://be-aware-frontend.vercel.app/",
    },
    {
        title: "Estate Pro",
        subtitle: "Real Estate Website (Top 20 Winner)",
        description: "Built a fully functional Estate Agency Website using only Zennit UI components in a live frontend battle. Ranked in the Top 20 winners, earning a Zennit UI Pro/Pro+ subscription while showcasing strong UI/UX, speed, and frontend execution under pressure.",
        image: "/proj_img/estate.png",
        video: "/proj_img/estate-pro.mp4",
        github: "https://github.com/pinank0301/Zennit-Hackathon",
        live: "https://estate-agent-pro.vercel.app/",
    },
    {
        title: "QuickAI",
        subtitle: "All-in-one Generative AI platform",
        description: "QuickAi is an all-in-one platform powered by Generative AI for content creation, image generation, smart image editing, and resume review—all delivered through a fast, intuitive interface.",
        image: "/proj_img/quick.png",
        github: "https://github.com/pinank0301/QuickAI",
        live: "https://quickai-pin.vercel.app/",
    },
];

function ProjectCard({ project, index }: { project: any; index: number }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isZoomed, setIsZoomed] = useState(false);

    const handleTimeUpdate = () => {
        if (project.title === "Estate Pro" && videoRef.current) {
            const currentTime = videoRef.current.currentTime;
            // The user mentioned the chat opens at 22s. 
            // We zoom in then, and reset if the video restarts (currentTime < 1)
            if (currentTime >= 22) {
                setIsZoomed(true);
            } else if (currentTime < 1) {
                setIsZoomed(false);
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group flex flex-col gap-8"
        >
            <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden border border-neutral-300 dark:border-neutral-800 transition-colors hover:border-neutral-500 dark:hover:border-neutral-600"
            >
                {project.video ? (
                    <video
                        ref={videoRef}
                        src={project.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        onTimeUpdate={handleTimeUpdate}
                        style={{
                            transform: isZoomed ? "scale(1.8)" : "scale(1)",
                            transformOrigin: "bottom left",
                        }}
                        className="w-full grayscale-[0.5] transition-all duration-1000 ease-in-out group-hover:grayscale-0 group-hover:scale-[1.01]"
                    />
                ) : (
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={1200}
                        height={675}
                        className="w-full grayscale-[0.5] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.01]"
                    />
                )}
            </a>

            <div className="flex flex-col gap-4">
                <div className="flex items-end justify-between border-b border-neutral-300 dark:border-neutral-800 pb-2">
                    <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 uppercase">
                        {project.title} — {project.subtitle}
                    </h3>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-bold uppercase tracking-tighter text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                    >
                        Github <ArrowUpRight className="h-4 w-4" />
                    </a>
                </div>
                <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {project.description}
                </p>
            </div>
        </motion.div>
    );
}

export function Projects() {
    return (
        <section id="projects" className="mx-auto max-w-5xl px-4 py-20 font-mono">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="mb-16 text-center text-4xl font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-widest">
                    Featured Projects
                </h2>
                <div className="flex flex-col gap-24">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}


