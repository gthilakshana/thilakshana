'use client';

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { VscGithubProject } from "react-icons/vsc";
import { PiReadCvLogo } from "react-icons/pi";
import { LuUser, LuPhoneCall, LuSun, LuMoon, LuCircleHelp } from "react-icons/lu";

export default function Header() {
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const sections = [
        { name: "Home", id: "home", icon: <GoHome /> },
        { name: "About", id: "about", icon: <LuUser /> },
        { name: "Services", id: "services", icon: <IoSettingsOutline /> },
        { name: "Resume", id: "resume", icon: <PiReadCvLogo /> },
        { name: "Projects", id: "projects", icon: <VscGithubProject /> },
        { name: "Skills", id: "skills", icon: <IoSettingsOutline /> },
        { name: "FAQ", id: "faq", icon: <LuCircleHelp /> },
        { name: "Contact", id: "contact", icon: <LuPhoneCall /> }
    ];

    const handleScroll = (id) => {
        setIsMenuOpen(false); // Close menu on click
        if (pathname !== "/") {
            router.push(`/#${id}`);
            return;
        }

        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
    };

    useEffect(() => {
        if (pathname !== "/") return;

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 3;
            setIsScrolled(window.scrollY > 20);

            sections.forEach((item) => {
                const elem = document.getElementById(item.id);
                if (elem) {
                    const top = elem.offsetTop;
                    const bottom = top + elem.offsetHeight;
                    if (scrollPos >= top && scrollPos < bottom) {
                        setActiveSection(item.id);
                    }
                }
            });
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [pathname]);

    return (
        <>
            {/* DESKTOP & MOBILE TOP HEADER */}
            <header
                className={`
                fixed top-0 left-0 w-full z-[100] 
                transition-all duration-500 py-6
                ${isScrolled || pathname !== "/" || isMenuOpen ? "backdrop-blur-2xl bg-black/80 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" : "bg-transparent"}
            `}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-16">
                    {/* LOGO */}
                    <div
                        onClick={() => handleScroll("home")}
                        className="flex items-center cursor-pointer group"
                    >
                        <div className="logo-font flex items-baseline gap-0.5">
                            <span className="text-4xl md:text-5xl font-black text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-5deg] inline-block">G</span>
                            <h1 className="text-xl md:text-2xl font-bold tracking-tighter -ml-1 flex items-center">
                                <span className="text-white group-hover:text-primary transition-all duration-500">Thilakshana</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-primary ml-1 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></span>
                            </h1>
                        </div>
                    </div>

                    {/* DESKTOP NAV */}
                    <nav className="hidden lg:flex items-center gap-2">
                        {sections.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleScroll(item.id)}
                                className={`px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 rounded-full
                                    ${activeSection === item.id && pathname === "/"
                                        ? "text-primary bg-primary/10"
                                        : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-primary/5"
                                    }
                                `}
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>

                    {/* MOBILE MENU TOGGLE */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 cinematic-glass rounded-xl text-primary border border-primary/20 transition-all active:scale-90"
                    >
                        <motion.span 
                            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-current rounded-full transition-all"
                        />
                        <motion.span 
                            animate={isMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                            className="w-4 h-0.5 bg-current rounded-full transition-all"
                        />
                        <motion.span 
                            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-current rounded-full transition-all"
                        />
                    </button>
                </div>
            </header>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-3xl pt-32 px-8 lg:hidden overflow-y-auto pb-20 custom-scrollbar"
                    >
                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-primary mb-4 opacity-50">Navigation</span>
                            {sections.map((item, idx) => (
                                <motion.button
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    key={item.id}
                                    onClick={() => handleScroll(item.id)}
                                    className={`
                                        flex items-center gap-6 py-4 px-6 rounded-2xl transition-all
                                        ${activeSection === item.id && pathname === "/" ? "bg-primary/10 text-primary border border-primary/20" : "text-white/40 hover:text-white/80"}
                                    `}
                                >
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="text-xl font-bold uppercase tracking-widest">{item.name}</span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
