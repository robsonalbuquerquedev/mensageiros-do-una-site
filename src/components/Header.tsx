"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLElement | null>(null);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Atividades", href: "/atividades" },
        { name: "Sobre Nós", href: "/sobre" },
    ];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                isOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="bg-[#02203b] shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Image src="/logo.png" alt="Logo" width={50} height={50} />
                    <h1 className="text-xl font-bold text-white">Mensageiros do Una</h1>
                </div>

                {/* Menu desktop */}
                <nav className="hidden md:flex space-x-6 text-sm md:text-base">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-[#d5d2d1] hover:text-[#da650c] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Ícone mobile */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menu mobile (slide down) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        ref={menuRef}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#02203b] px-4 py-4 space-y-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block text-[#d5d2d1] hover:text-[#da650c] transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
