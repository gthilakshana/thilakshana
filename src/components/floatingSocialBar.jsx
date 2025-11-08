import React, { useState } from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FloatingSocialBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed right-2 bottom-38 md:bottom-36 z-50 flex flex-col items-center">

            {/* Toggle Button */}
            <button
                onClick={() => setOpen(!open)}
                className="
        w-9 h-9
        flex items-center justify-center
        rounded-full

        bg-gradient-to-br from-gray-900 to-gray-800
        backdrop-blur-md
        border border-white/20

        shadow-md shadow-black/10
        hover:shadow-lg hover:shadow-black/20

        hover:scale-105 active:scale-95
        hover:ring-1 hover:ring-white/30

        transition-all duration-300
    "
            >
                {open ? (
                    <ChevronRight className="w-4 h-4 text-white" />
                ) : (
                    <ChevronLeft className="w-4 h-4 text-white" />
                )}
            </button>

            {/* Social Icons Container */}
            <div
                className={`flex flex-col items-center space-y-2 mt-3 transition-all duration-500 ${open
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20 pointer-events-none"
                    }`}
            >

                {/* WhatsApp */}
                <button
                    onClick={() => window.open("https://wa.me/94774571927", "_blank")}
                    className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-green-500 text-white shadow-xl  hover:scale-110 transition-transform duration-300"
                >
                    <FaWhatsapp className="text-xl md:text-2xl" />
                </button>

                {/* Facebook */}
                <button
                    onClick={() => window.open("https://www.facebook.com/gavrawa.thilakshana/", "_blank")}
                    className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-blue-600 text-white shadow-xl  hover:scale-110 transition-transform duration-300"
                >
                    <FaFacebook className="text-xl md:text-2xl" />
                </button>

                {/* Instagram */}
                <button
                    onClick={() => window.open("https://www.instagram.com/gavrawa_thilakshana_", "_blank")}
                    className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-pink-600 text-white shadow-xl  hover:scale-110 transition-transform duration-300"
                >
                    <FaInstagram className="text-xl md:text-2xl" />
                </button>

                {/* LinkedIn */}
                <button
                    onClick={() => window.open("https://www.linkedin.com/in/gavrawa-thilakshana/", "_blank")}
                    className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-blue-600 text-white shadow-xl  hover:scale-110 transition-transform duration-300"
                >
                    <FaLinkedin className="text-xl md:text-2xl" />
                </button>

                {/* Email */}
                <button
                    onClick={() => window.open("mailto:gavrawavanniarachchi@gmail.com", "_blank")}
                    className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-red-600 text-white shadow-xl  hover:scale-110 transition-transform duration-300"
                >
                    <FaEnvelope className="text-xl md:text-2xl" />
                </button>

            </div>
        </div>
    );
};

export default FloatingSocialBar;
