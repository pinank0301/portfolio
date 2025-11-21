"use client";

import React, { useState } from "react";
import {
    Navbar as NavbarPrimitive,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
} from "@/components/ui/resizable-navbar";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Skills", link: "#skills" },
        { name: "Projects", link: "#projects" },
        { name: "Experience", link: "#experience" },
        { name: "Education", link: "#education" },
    ];

    return (
        <NavbarPrimitive className="top-4">
            <NavBody>
                <div className="flex w-full items-center justify-between">
                    <NavItems
                        items={navItems}
                        className="relative flex-1"
                    />
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                    </div>
                </div>
            </NavBody>
            <MobileNav visible={true} className="md:hidden">
                <MobileNavHeader>
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>
                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    {navItems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            className="block w-full rounded-md px-4 py-2 text-lg font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="mt-4 flex w-full items-center justify-between px-4">
                        <ThemeToggle />
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </NavbarPrimitive>
    );
}
