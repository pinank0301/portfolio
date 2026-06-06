"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillInfo {
    name: string;
    category: string;
    description: string;
    experience: string;
    level: number; // 0-100
    useCases: string[];
}

const skillsData: SkillInfo[] = [
    {
        name: "HTML",
        category: "Frontend",
        description:
            "The backbone of every web page. I use semantic HTML5 to build accessible, well-structured markup that serves as the foundation for styling and interactivity.",
        experience: "3+ years",
        level: 95,
        useCases: ["Semantic Markup", "Accessibility", "SEO", "Forms"],
    },
    {
        name: "CSS",
        category: "Frontend",
        description:
            "From complex layouts with Grid and Flexbox to smooth animations and responsive designs — CSS is where I bring visual ideas to life with precision.",
        experience: "3+ years",
        level: 90,
        useCases: ["Responsive Design", "Animations", "Layouts", "Theming"],
    },
    {
        name: "Tailwind CSS",
        category: "Frontend",
        description:
            "A utility-first CSS framework that accelerates my development workflow. I use it to rapidly build consistent, responsive interfaces without leaving the markup.",
        experience: "2+ years",
        level: 88,
        useCases: ["Rapid Prototyping", "Design Systems", "Responsive UI", "Component Styling"],
    },
    {
        name: "Java",
        category: "Language",
        description:
            "A strongly-typed, object-oriented language I use for building robust backend systems, data structures, and algorithm-heavy applications.",
        experience: "2+ years",
        level: 75,
        useCases: ["OOP", "Data Structures", "Backend APIs", "Algorithms"],
    },
    {
        name: "JavaScript",
        category: "Language",
        description:
            "The language of the web. I leverage modern ES6+ features, async patterns, and the vast ecosystem to build dynamic, interactive applications on both client and server.",
        experience: "3+ years",
        level: 92,
        useCases: ["Web Apps", "DOM Manipulation", "Async Programming", "Full-Stack"],
    },
    {
        name: "TypeScript",
        category: "Language",
        description:
            "TypeScript brings type safety to JavaScript, catching bugs at compile time. I use it extensively in React and Node.js projects for more maintainable, self-documenting code.",
        experience: "2+ years",
        level: 88,
        useCases: ["Type Safety", "Large Codebases", "API Contracts", "Refactoring"],
    },
    {
        name: "Python",
        category: "Language",
        description:
            "A versatile language I use for scripting, automation, data processing, and AI/ML experimentation. Its readability makes it ideal for rapid prototyping.",
        experience: "2+ years",
        level: 80,
        useCases: ["Scripting", "Automation", "Data Analysis", "AI/ML"],
    },
    {
        name: "React",
        category: "Frontend",
        description:
            "My go-to library for building component-driven user interfaces. I build reusable, performant UIs using hooks, context, and modern React patterns.",
        experience: "2+ years",
        level: 90,
        useCases: ["SPAs", "Component Libraries", "State Management", "Hooks"],
    },
    {
        name: "Shadcn",
        category: "Frontend",
        description:
            "A collection of beautifully designed, accessible UI components built on Radix primitives. I use it to ship polished interfaces quickly without sacrificing customizability.",
        experience: "1+ year",
        level: 82,
        useCases: ["UI Components", "Accessibility", "Theming", "Rapid Development"],
    },
    {
        name: "Next.js",
        category: "Full-Stack",
        description:
            "The React framework for production. I leverage server components, API routes, SSR/SSG, and the App Router to build blazing-fast, SEO-friendly full-stack applications.",
        experience: "2+ years",
        level: 88,
        useCases: ["SSR/SSG", "API Routes", "SEO", "Full-Stack Apps"],
    },
    {
        name: "Express.js",
        category: "Backend",
        description:
            "A minimal, flexible Node.js framework I use to build RESTful APIs and server-side applications with middleware-based architecture.",
        experience: "2+ years",
        level: 85,
        useCases: ["REST APIs", "Middleware", "Authentication", "Server-Side Logic"],
    },
    {
        name: "Node.js",
        category: "Backend",
        description:
            "The runtime that powers my server-side JavaScript. I use it for building scalable backend services, CLI tools, and real-time applications.",
        experience: "2+ years",
        level: 85,
        useCases: ["Backend Services", "CLI Tools", "Real-Time Apps", "Microservices"],
    },
    {
        name: "MongoDB",
        category: "Database",
        description:
            "A NoSQL document database I use for flexible, schema-less data modeling. Great for rapid iteration and applications with evolving data structures.",
        experience: "2+ years",
        level: 82,
        useCases: ["Document Storage", "Aggregation", "Flexible Schema", "Scalability"],
    },
    {
        name: "MySQL",
        category: "Database",
        description:
            "A reliable relational database for structured data. I use it for applications requiring ACID compliance, complex queries, and well-defined schemas.",
        experience: "1+ year",
        level: 75,
        useCases: ["Relational Data", "Complex Queries", "ACID Transactions", "Reporting"],
    },
    {
        name: "PostgreSQL",
        category: "Database",
        description:
            "An advanced open-source relational database. I leverage its powerful features like JSON support, full-text search, and extensibility for production-grade applications.",
        experience: "1+ year",
        level: 72,
        useCases: ["Advanced Queries", "JSON Support", "Full-Text Search", "Extensions"],
    },
    {
        name: "AWS",
        category: "DevOps",
        description:
            "Amazon Web Services powers my cloud infrastructure. I work with services like EC2, S3, Lambda, and RDS to deploy and scale applications reliably.",
        experience: "1+ year",
        level: 68,
        useCases: ["Cloud Hosting", "S3 Storage", "Lambda Functions", "CI/CD"],
    },
    {
        name: "Git",
        category: "DevOps",
        description:
            "Version control is essential to my workflow. I use Git for branching strategies, collaborative development, and maintaining clean project histories.",
        experience: "3+ years",
        level: 90,
        useCases: ["Version Control", "Branching", "Collaboration", "Code Review"],
    },
    {
        name: "Github",
        category: "DevOps",
        description:
            "My hub for open-source contributions, project hosting, and CI/CD pipelines. I use GitHub Actions, Issues, and PRs for streamlined development workflows.",
        experience: "3+ years",
        level: 90,
        useCases: ["Open Source", "CI/CD", "Project Management", "Collaboration"],
    },
    {
        name: "Generative AI",
        category: "AI/ML",
        description:
            "I work with large language models and generative AI APIs to build intelligent features — from chatbots and content generation to AI-powered developer tools.",
        experience: "1+ year",
        level: 78,
        useCases: ["LLM Integration", "Chatbots", "Content Generation", "AI Tools"],
    },
    {
        name: "Database Management",
        category: "Database",
        description:
            "Beyond individual databases, I understand indexing strategies, query optimization, schema design, and data modeling patterns for building performant data layers.",
        experience: "2+ years",
        level: 80,
        useCases: ["Schema Design", "Query Optimization", "Indexing", "Data Modeling"],
    },
];

const categoryColors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
    Frontend: {
        bg: "bg-blue-500/10 dark:bg-blue-400/10",
        text: "text-blue-700 dark:text-blue-300",
        border: "border-blue-500/30 dark:border-blue-400/30",
        glow: "shadow-blue-500/20",
    },
    Language: {
        bg: "bg-amber-500/10 dark:bg-amber-400/10",
        text: "text-amber-700 dark:text-amber-300",
        border: "border-amber-500/30 dark:border-amber-400/30",
        glow: "shadow-amber-500/20",
    },
    Backend: {
        bg: "bg-emerald-500/10 dark:bg-emerald-400/10",
        text: "text-emerald-700 dark:text-emerald-300",
        border: "border-emerald-500/30 dark:border-emerald-400/30",
        glow: "shadow-emerald-500/20",
    },
    "Full-Stack": {
        bg: "bg-violet-500/10 dark:bg-violet-400/10",
        text: "text-violet-700 dark:text-violet-300",
        border: "border-violet-500/30 dark:border-violet-400/30",
        glow: "shadow-violet-500/20",
    },
    Database: {
        bg: "bg-rose-500/10 dark:bg-rose-400/10",
        text: "text-rose-700 dark:text-rose-300",
        border: "border-rose-500/30 dark:border-rose-400/30",
        glow: "shadow-rose-500/20",
    },
    DevOps: {
        bg: "bg-cyan-500/10 dark:bg-cyan-400/10",
        text: "text-cyan-700 dark:text-cyan-300",
        border: "border-cyan-500/30 dark:border-cyan-400/30",
        glow: "shadow-cyan-500/20",
    },
    "AI/ML": {
        bg: "bg-fuchsia-500/10 dark:bg-fuchsia-400/10",
        text: "text-fuchsia-700 dark:text-fuchsia-300",
        border: "border-fuchsia-500/30 dark:border-fuchsia-400/30",
        glow: "shadow-fuchsia-500/20",
    },
};

const levelBarColors: Record<string, string> = {
    Frontend: "bg-blue-500 dark:bg-blue-400",
    Language: "bg-amber-500 dark:bg-amber-400",
    Backend: "bg-emerald-500 dark:bg-emerald-400",
    "Full-Stack": "bg-violet-500 dark:bg-violet-400",
    Database: "bg-rose-500 dark:bg-rose-400",
    DevOps: "bg-cyan-500 dark:bg-cyan-400",
    "AI/ML": "bg-fuchsia-500 dark:bg-fuchsia-400",
};

export function Skills() {
    const [selectedSkill, setSelectedSkill] = useState<SkillInfo | null>(null);

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
                    {skillsData.map((skill, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setSelectedSkill(skill)}
                            className="group relative cursor-pointer border border-neutral-800 px-4 py-2 text-lg font-bold text-neutral-700 transition-all duration-200 hover:bg-neutral-800 hover:text-neutral-100 dark:border-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-200 dark:hover:text-neutral-900"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {skill.name}
                            <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-neutral-800 transition-all duration-300 group-hover:w-full dark:bg-neutral-200" />
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            {/* Skill Detail Modal */}
            <AnimatePresence>
                {selectedSkill && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setSelectedSkill(null)}
                        >
                            {/* Modal Card */}
                            <motion.div
                                className="relative mx-4 w-full max-w-lg overflow-hidden border border-neutral-200 bg-white/95 shadow-2xl backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-900/95"
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                transition={{
                                    type: "spring",
                                    damping: 25,
                                    stiffness: 300,
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Top accent line */}
                                <div
                                    className={`h-1 w-full ${levelBarColors[selectedSkill.category] || "bg-neutral-500"}`}
                                />

                                <div className="p-6">
                                    {/* Header */}
                                    <div className="mb-5 flex items-start justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                                                {selectedSkill.name}
                                            </h3>
                                            <span
                                                className={`mt-2 inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${
                                                    categoryColors[selectedSkill.category]?.bg || ""
                                                } ${categoryColors[selectedSkill.category]?.text || ""} ${
                                                    categoryColors[selectedSkill.category]?.border || ""
                                                }`}
                                            >
                                                {selectedSkill.category}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => setSelectedSkill(null)}
                                            className="flex h-8 w-8 items-center justify-center text-neutral-400 transition-colors hover:text-neutral-800 dark:hover:text-neutral-200"
                                            aria-label="Close skill details"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <line x1="18" y1="6" x2="6" y2="18" />
                                                <line x1="6" y1="6" x2="18" y2="18" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Description */}
                                    <p className="mb-5 leading-relaxed text-neutral-600 dark:text-neutral-400">
                                        {selectedSkill.description}
                                    </p>

                                    {/* Experience & Level */}
                                    <div className="mb-5 flex items-center gap-6">
                                        <div>
                                            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                                                Experience
                                            </span>
                                            <p className="mt-0.5 text-lg font-bold text-neutral-800 dark:text-neutral-200">
                                                {selectedSkill.experience}
                                            </p>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                                                    Proficiency
                                                </span>
                                                <span className="text-xs font-bold text-neutral-600 dark:text-neutral-400">
                                                    {selectedSkill.level}%
                                                </span>
                                            </div>
                                            <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
                                                <motion.div
                                                    className={`h-full rounded-full ${
                                                        levelBarColors[selectedSkill.category] ||
                                                        "bg-neutral-500"
                                                    }`}
                                                    initial={{ width: 0 }}
                                                    animate={{
                                                        width: `${selectedSkill.level}%`,
                                                    }}
                                                    transition={{
                                                        duration: 0.8,
                                                        delay: 0.2,
                                                        ease: "easeOut",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Use Cases */}
                                    <div>
                                        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                                            Use Cases
                                        </span>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {selectedSkill.useCases.map((useCase, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{
                                                        delay: 0.3 + i * 0.08,
                                                        duration: 0.3,
                                                    }}
                                                    className="border border-neutral-300 bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                                                >
                                                    {useCase}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
