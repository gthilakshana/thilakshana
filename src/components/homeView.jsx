import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function HomeView() {
    const [textIndex, setTextIndex] = useState(0);
    const textArray = ["Full Stack Developer", "MERN Stack Enthusiast", "Next.js Explorer"];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % textArray.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="flex h-screen flex-col md:flex-row items-center justify-between bg-gray-900 px-6 md:px-16">
            {/* Left Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <p className="text-yellow-500 text-lg font-medium">Hey, I'm Gavrawa Thilakshana</p>

                {/* Animated Heading */}
                <h1 className="text-4xl md:text-5xl font-arial text-white mt-2 leading-snug">

                    <span className="transition-all duration-500">{textArray[textIndex]}</span>
                </h1>

                <p className="text-white mt-4 leading-relaxed max-w-xl">
                    Enthusiastic MERN Stack Developer with strong expertise in React and Node.js, currently expanding skills in Next.js. Possess a solid foundation in Linux and AWS, with a passion for building clean, responsive, and user-friendly interfaces backed by robust back-end functionality. A fast learner eager to contribute to impactful projects, adapt to new technologies, and thrive in collaborative environments while combining creativity with technical precision.
                </p>

                {/* Buttons + Social Icons */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex space-x-4 justify-center sm:justify-start">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition">
                            <FaFacebookF />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition">
                            <FaGithub />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
                <div className="relative">
                    <img src="/logoP.png" alt="Profile" className="relative z-10 w-80 h-auto" />
                    {/* Decorative Sparkles */}
                    <div className="absolute -top-4 left-6 text-blue-400 text-xl animate-ping">✦</div>
                    <div className="absolute bottom-6 -right-4 text-teal-400 text-xl animate-ping">✧</div>
                    <div className="absolute top-10 -left-6 text-blue-300 text-xl animate-ping">✦</div>
                </div>
            </div>
        </section>
    );
}
