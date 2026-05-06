'use client';

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { VscGithubProject } from "react-icons/vsc";
import { PiReadCvLogo } from "react-icons/pi";
import { LuUser, LuPhoneCall, LuSun, LuMoon, LuCircleHelp } from "react-icons/lu";

export default function Header() {
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
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
        if (pathname !== "/") {
            // If not on home page, go to home with hash
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
            {/* DESKTOP NAV */}
            <header
                className={`
                fixed top-0 left-0 w-full z-50 
                transition-all duration-500 py-6
                ${isScrolled || pathname !== "/" ? "backdrop-blur-2xl bg-black/80 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" : "bg-transparent"}
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

                    {/* NAV BUTTONS */}
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
                        {pathname === "/admin" && (
                             <div className="ml-4 px-4 py-1 bg-primary/20 border border-primary/30 rounded-full text-[8px] font-black uppercase tracking-widest text-primary animate-pulse">
                                Terminal Mode
                             </div>
                        )}
                    </nav>
                </div>
            </header>

            {/* BOTTOM MOBILE NAV */}
            <div
                className="
                    fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md
                    cinematic-glass rounded-3xl
                    shadow-2xl z-[9999] py-3 px-6 flex justify-around items-center
                    lg:hidden border border-white/20
                "
            >
                {sections.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleScroll(item.id)}
                        className={`
                            flex flex-col items-center justify-center cursor-pointer
                            transition-all duration-300
                            ${activeSection === item.id && pathname === "/" ? "text-primary scale-110" : "text-[var(--text-muted)] hover:text-primary"}
                        `}
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-[10px] mt-1 font-bold uppercase tracking-tighter">
                            {item.name}
                        </span>
                    </button>
                ))}
            </div>
        </>
    );
}
