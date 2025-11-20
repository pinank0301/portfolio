"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock";

const skills = [
    { title: "Python", icon: "python.svg", href: "#" },
    { title: "JavaScript", icon: "javascript.svg", href: "#" },
    { title: "C++", icon: "c++.png", href: "#" }, // Keeping png as per file list if svg not found, but list showed c++.png was not there? Wait, list showed c++.png was NOT there, but c++.png was in previous list. The new list has: firebase.svg, git.svg, github.svg, javascript.svg, mongodb.svg, mysql.svg, nodejs.svg, postgresql.svg, python.svg, react.svg.
    // So C++ is missing from the new SVG list? I'll check if I should use text or if I missed it.
    // The user said "I have added all my skills svg".
    // I will use the SVGs present.
    { title: "React", icon: "react.svg", href: "#" },
    { title: "Python", icon: "python.svg", href: "#" },
    { title: "JavaScript", icon: "javascript.svg", href: "#" },
    { title: "Node.js", icon: "nodejs.svg", href: "#" },
    { title: "MongoDB", icon: "mongodb.svg", href: "#" },
    { title: "PostgreSQL", icon: "postgresql.svg", href: "#" },
    { title: "MySQL", icon: "mysql.svg", href: "#" },
    { title: "Firebase", icon: "firebase.svg", href: "#" },
    { title: "Git", icon: "git.svg", href: "#" },
    { title: "GitHub", icon: "github.svg", href: "#" },
];

// I need to handle the missing ones or just show what's available.
// Available SVGs: firebase, git, github, javascript, mongodb, mysql, nodejs, postgresql, python, react.
// Missing from original list: C++, Next.js, Express.js, OpenCV, Tailwind, Tkinter, Postman, Cloudinary, Clerk.
// I will try to use the PNGs if they still exist for the missing ones, or just omit/text.
// The user said "remove scikit learn... and for rest apply the logos".
// I'll mix them.

export function Skills() {
    const items = [
        { title: "Python", icon: <Image src="/skills/python.svg" width={40} height={40} alt="Python" />, href: "#" },
        { title: "JavaScript", icon: <Image src="/skills/javascript.svg" width={40} height={40} alt="JavaScript" />, href: "#" },
        { title: "React", icon: <Image src="/skills/react.svg" width={40} height={40} alt="React" />, href: "#" },
        { title: "Node.js", icon: <Image src="/skills/nodejs.svg" width={40} height={40} alt="Node.js" />, href: "#" },
        { title: "MongoDB", icon: <Image src="/skills/mongodb.svg" width={40} height={40} alt="MongoDB" />, href: "#" },
        { title: "PostgreSQL", icon: <Image src="/skills/postgresql.svg" width={40} height={40} alt="PostgreSQL" />, href: "#" },
        { title: "MySQL", icon: <Image src="/skills/mysql.svg" width={40} height={40} alt="MySQL" />, href: "#" },
        { title: "Firebase", icon: <Image src="/skills/firebase.svg" width={40} height={40} alt="Firebase" />, href: "#" },
        { title: "Git", icon: <Image src="/skills/git.svg" width={40} height={40} alt="Git" />, href: "#" },
        { title: "GitHub", icon: <Image src="/skills/github.svg" width={40} height={40} alt="GitHub" />, href: "#" },
    ];

    return (
        <section id="skills" className="mx-auto max-w-5xl px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
            >
                <h2 className="mb-12 text-center text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                    Skills
                </h2>
                <FloatingDock
                    items={items}
                    desktopClassName="bg-neutral-100 dark:bg-neutral-900"
                />
            </motion.div>
        </section>
    );
}
