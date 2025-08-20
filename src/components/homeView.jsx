import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaNodeJs, FaReact, FaJava, FaDatabase, FaLinux, FaAws } from "react-icons/fa";

export default function HomeView() {
    const [textIndex, setTextIndex] = useState(0);
    const textArray = ["Full Stack Developer", "MERN Stack Enthusiast", "Next.js Explorer"];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % textArray.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const techIcons = [
        { icon: <FaNodeJs className="text-green-500" />, angle: 0 },
        { icon: <FaReact className="text-blue-400" />, angle: 60 },
        { icon: <FaJava className="text-red-500" />, angle: 120 },
        { icon: <FaDatabase className="text-yellow-400" />, angle: 180 },
        { icon: <FaAws className="text-orange-500" />, angle: 240 },
        { icon: <FaLinux className="text-gray-700" />, angle: 300 },
    ];

    const getRadius = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 640) return 90;
            if (window.innerWidth < 768) return 110;
        }
        return 130;
    };

    return (
        <section id="homeView" className="flex flex-col-reverse md:flex-row items-center justify-between bg-gray-50 px-6 md:px-16 py-10 md:py-0 min-h-screen border-b-2 border-gray-200">

            {/* Left Content (Text) */}
            <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0  ">
                <p className="text-yellow-500 text-lg font-medium">
                    Hey, I'm Gavrawa Thilakshana
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 leading-snug">
                    <span className="transition-all duration-500 uppercase">
                        {textArray[textIndex]}
                    </span>
                </h1>

                <p className="text-gray-800 leading-relaxed mb-6 max-w-xl mt-6 mx-auto md:mx-0">
                    Enthusiastic MERN Stack Developer with strong expertise in React and Node.js,
                    currently expanding skills in Next.js. Possess a solid foundation in Linux and
                    AWS, with a passion for building clean, responsive, and user-friendly interfaces
                    backed by robust back-end functionality. A fast learner eager to contribute to
                    impactful projects, adapt to new technologies, and thrive in collaborative
                    environments while combining creativity with technical precision.
                </p>

                {/* Social Icons */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex space-x-4 justify-center sm:justify-start">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-500 transition"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-500 transition"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-500 transition"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-500 transition"
                        >
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>


            <div className="hidden md:flex w-full md:w-1/2 justify-center mb-8 md:mb-0 items-center">
                <div className="relative w-56  md:w-72 h-56  md:h-72 flex items-center justify-center">
                    {/* Profile Image */}
                    <img
                        src="/logoP.png"
                        alt="Profile"
                        className="relative z-10 w-40 sm:w-44 md:w-48 h-40 sm:h-44 md:h-48 rounded-full border-4 border-blue-300 hover:scale-105 transition-transform duration-300"
                    />

                    {/* Tech Icons */}
                    {techIcons.map((item, i) => (
                        <div
                            key={i}
                            className="absolute text-xl sm:text-2xl md:text-3xl"
                            style={{
                                transform: `rotate(${item.angle}deg) translate(${getRadius()}px) rotate(-${item.angle}deg)`,
                            }}
                        >
                            {item.icon}
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
