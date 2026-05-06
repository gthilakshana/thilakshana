import React, { useState } from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FloatingSocialBar = () => {
    const [open, setOpen] = useState(false);

    const socials = [
        { icon: <FaWhatsapp />, href: "https://wa.me/94774571927", color: "bg-primary" },
        { icon: <FaFacebook />, href: "https://www.facebook.com/gavrawa.thilakshana/", color: "bg-primary" },
        { icon: <FaInstagram />, href: "https://www.instagram.com/gavrawa_thilakshana_", color: "bg-primary" },
        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/gavrawa-thilakshana/", color: "bg-primary" },
        { icon: <FaEnvelope />, href: "mailto:gavrawavanniarachchi@gmail.com", color: "bg-primary" },
    ];

    return (
        <div className="fixed right-1 md:right-4 bottom-32 md:bottom-36 z-[100] flex flex-col items-center">
            {/* Toggle Button */}
            <button
                onClick={() => setOpen(!open)}
                className="
                    w-10 h-10
                    flex items-center justify-center
                    rounded-full
                    cinematic-glass
                    text-[var(--text-main)]
                    shadow-xl
                    hover:scale-110 active:scale-90
                    hover:border-primary/40
                    transition-all duration-300
                "
            >
                {open ? (
                    <ChevronRight className="w-5 h-5 text-primary" />
                ) : (
                    <ChevronLeft className="w-5 h-5" />
                )}
            </button>

            {/* Social Icons Container */}
            <div
                className={`flex flex-col items-center space-y-3 mt-4 transition-all duration-500 origin-bottom ${
                    open
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-0 pointer-events-none"
                }`}
            >
                {socials.map((social, i) => (
                    <button
                        key={i}
                        onClick={() => window.open(social.href, "_blank")}
                        className={`
                            flex items-center justify-center 
                            w-11 h-11 md:w-12 md:h-12 
                            ${social.color} 
                            text-white 
                            rounded-2xl
                            shadow-lg 
                            hover:scale-115 hover:-translate-x-2
                            transition-all duration-300
                        `}
                    >
                        <span className="text-xl md:text-2xl">{social.icon}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FloatingSocialBar;
