"use client";

import React from "react";
import Image from "next/image";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconFileText, IconMail } from "@tabler/icons-react";
import { EncryptedText } from "@/components/ui/encrypted-text";

export function Hero() {
    return (
        <section className="flex min-h-[80vh] flex-col items-center justify-center px-4">
            <div className="relative w-full max-w-7xl">

                <div className="flex flex-col-reverse items-start justify-between gap-8 md:flex-row md:items-center">
                    <div className="flex flex-col items-start space-y-8">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tight text-neutral-800 dark:text-white sm:text-4xl md:text-5xl">
                                <EncryptedText text="PINANK TRIVEDI" /> <span className="text-lg font-normal text-neutral-500 dark:text-neutral-400">(he/him)</span>
                            </h1>
                        </div>

                        <div className="space-y-4">
                            <p className="text-xl font-medium text-neutral-800 dark:text-white">
                                <EncryptedText text="20 ★ Engineer ★ FullStack Developer" />
                            </p>
                            <p className="max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                                <EncryptedText text="Hi there, I'm Pinank, a final year undergrad pursuing Engineering. I love to build cool products that make people's lives easier. I play, read books, and create content for fun." />
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500">LINKS</h3>
                            <div className="flex flex-wrap gap-6">
                                <a href="https://drive.google.com/file/d/1B3ZqAcDXgMABwfbg9HR3V8XIVuxZQnhC/view?usp=sharing" className="flex items-center gap-2 text-neutral-700 transition-colors hover:text-black dark:text-white dark:hover:text-neutral-300">
                                    <IconFileText size={20} />
                                    <span className="font-medium">Resume</span>
                                </a>
                                <a href="mailto:pinanktrivedi694@gmail.com" className="flex items-center gap-2 text-neutral-700 transition-colors hover:text-black dark:text-white dark:hover:text-neutral-300">
                                    <IconMail size={20} />
                                    <span className="font-medium">Mail</span>
                                </a>
                                <a href="https://github.com/pinank0301" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-700 transition-colors hover:text-black dark:text-white dark:hover:text-neutral-300">
                                    <IconBrandGithub size={20} />
                                    <span className="font-medium">Github</span>
                                </a>
                                <a href="https://www.linkedin.com/in/pinank-trivedi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-700 transition-colors hover:text-black dark:text-white dark:hover:text-neutral-300">
                                    <IconBrandLinkedin size={20} />
                                    <span className="font-medium">Linkedin</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative shrink-0">
                        <div className="h-32 w-32 overflow-hidden rounded-none border-2 border-neutral-200 bg-white dark:border-white/20 dark:bg-neutral-900 sm:h-40 sm:w-40 md:h-48 md:w-48">
                            <Image
                                src="/photo.png"
                                alt="Pinank Trivedi"
                                fill
                                className="object-cover grayscale filter"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
