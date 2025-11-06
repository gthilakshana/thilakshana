import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function HomeView() {
    const [textIndex, setTextIndex] = useState(0);
    const textArray = [
        "Full Stack Developer",
        "MERN Stack Enthusiast",
        "Next.js Explorer",
        "UI/UX Designer",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % textArray.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const socialLinks = [
        { icon: <FaEnvelope />, url: "mailto:gavrawavanniarachchi@gmail.com" },
        { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/gavrawa-thilakshana" },
        { icon: <FaGithub />, url: "https://github.com/gthilakshana" },
    ];

    return (
        <section
            id="home"
            className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-30 min-h-screen overflow-hidden"
        >
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/bg.mp4" type="video/mp4" />
            </video>

            {/* Overlay (for readability) */}
            <div className="absolute inset-0 bg-gradient-to-b  "></div>

            {/* Main Content */}
            <div className="relative z-10 w-full md:w-1/2 text-center md:text-left text-white ">
                <motion.p
                    className="text-yellow-400 text-lg font-semibold tracking-wide mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Hey, I'm Gavrawa Thilakshana
                </motion.p>

                <motion.h1
                    key={textIndex}
                    className="text-3xl md:text-5xl lg:text-5xl font-extrabold leading-tight mb-4 uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {textArray[textIndex]}
                </motion.h1>

                <motion.p
                    className="text-gray-200 leading-relaxed mb-8 max-w-[600px] mx-auto md:mx-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Enthusiastic MERN Stack Developer with strong expertise in React and Node.js,
                    currently expanding skills in Next.js. Passionate about creating clean,
                    responsive interfaces and robust backend systems.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="flex flex-row sm:flex-row items-center gap-5 justify-center md:justify-start"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
                    >
                        View My Work
                    </a>

                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black shadow-lg transition-transform transform hover:scale-105"
                    >
                        Contact Me
                    </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    className="flex justify-center md:justify-start space-x-5 mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    {socialLinks.map((link, i) => (
                        <motion.a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-white hover:bg-white hover:text-yellow-600 transition-transform transform hover:scale-110"
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* WhatsApp Floating Button */}
            <motion.div
                className="fixed bottom-5 left-5 flex flex-col space-y-4 z-50"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <button
                    onClick={() => window.open("https://wa.me/94774571927", "_blank")}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-xl hover:scale-110 transition-transform duration-300"
                >
                    <FaWhatsapp className="text-2xl" />
                </button>
            </motion.div>
        </section>
    );
}
