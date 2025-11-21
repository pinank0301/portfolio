"use client";

import React from "react";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconFileText,
    IconMail,
} from "@tabler/icons-react";

export function Footer() {
    const socialLinks = [
        {
            name: "Resume",
            href: "https://drive.google.com/file/d/1B3ZqAcDXgMABwfbg9HR3V8XIVuxZQnhC/view?usp=sharing",
            icon: <IconFileText size={20} />,
        },
        {
            name: "Mail",
            href: "mailto:pinanktrivedi694@gmail.com",
            icon: <IconMail size={20} />,
        },
        {
            name: "Github",
            href: "https://github.com/pinank0301",
            icon: <IconBrandGithub size={20} />,
        },
        {
            name: "Linkedin",
            href: "https://www.linkedin.com/in/pinank-trivedi/",
            icon: <IconBrandLinkedin size={20} />,
        },
    ].filter(link => link.href);

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
    ];

    return (
        <footer className="w-full border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    {/* Brand & Copyright */}
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <span className="text-xl font-bold text-neutral-800 dark:text-white">
                            Pinank Trivedi
                        </span>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            &copy; {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        {socialLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
