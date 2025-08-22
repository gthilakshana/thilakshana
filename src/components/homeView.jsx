import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
    FaNodeJs, FaReact, FaJava, FaDatabase, FaLinux, FaAws, FaHtml5, FaCss3Alt,
    FaBootstrap, FaGitAlt
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiFigma, SiTailwindcss } from "react-icons/si";


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
        { icon: <FaNodeJs className="text-green-500" />, style: { top: "5%", left: "15%" } },
        { icon: <SiExpress className="text-gray-100" />, style: { top: "20%", right: "12%" } },
        { icon: <FaJava className="text-red-500" />, style: { bottom: "22%", left: "8%" } },
        { icon: <SiFigma className="text-pink-500" />, style: { top: "10%", right: "35%" } },
        { icon: <FaReact className="text-blue-400" />, style: { top: "15%", right: "10%" } },
        { icon: <SiMongodb className="text-green-600" />, style: { bottom: "5%", left: "20%" } },
        { icon: <SiMysql className="text-blue-100" />, style: { bottom: "12%", right: "20%" } },
        { icon: <FaHtml5 className="text-orange-600" />, style: { top: "35%", left: "-5%" } },
        { icon: <FaCss3Alt className="text-blue-600" />, style: { top: "40%", right: "-5%" } },
        { icon: <FaBootstrap className="text-purple-600" />, style: { bottom: "30%", right: "5%" } },
        { icon: <SiTailwindcss className="text-sky-400" />, style: { top: "50%", left: "-8%" } },
        { icon: <FaGitAlt className="text-red-600" />, style: { bottom: "10%", left: "-5%" } },
        { icon: <FaGithub className="text-white" />, style: { top: "60%", right: "5%" } },
        { icon: <FaLinux className="text-gray-50" />, style: { top: "55%", left: "5%" } },
        { icon: <FaAws className="text-orange-500" />, style: { bottom: "20%", right: "-5%" } },
    ];


    const socialLinks = [
        { icon: <FaEnvelope />, url: "mailto:gavrawavanniarachchi@gmail.com" },
        { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/gavrawa-thilakshana" },
        { icon: <FaGithub />, url: "https://github.com/gthilakshana" },
    ];

    return (
        <section
            id="home"
            className="flex flex-col items-center justify-center md:flex-row md:justify-between bg-gray-800 px-6 md:px-16 py-10 min-h-screen border-b-2 border-gray-200"
        >

            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 ">
                <p className="text-yellow-500 text-[20px] font-medium">
                    Hey, I'm Gavrawa Thilakshana
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 leading-snug">
                    <span className="transition-all duration-500 uppercase">
                        {textArray[textIndex]}
                    </span>
                </h1>

                <p className="text-gray-50 leading-relaxed mb-6 max-w-[1000px] mt-6 mx-auto md:mx-0 ">
                    Enthusiastic MERN Stack Developer with strong expertise in React and Node.js, currently
                    expanding skills in Next.js. Possess a solid foundation in Linux and AWS, with a passion
                    for building clean, responsive, and user-friendly interfaces backed by robust back-end
                    functionality. A fast learner eager to contribute to impactful projects, adapt to new
                    technologies, and thrive in collaborative environments while combining creativity with
                    technical precision.
                </p>


                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex space-x-4 justify-center sm:justify-start">
                        {socialLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-blue-500 transition"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>


            <div className="hidden md:flex w-full md:w-1/2 justify-center items-center">
                <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px] flex items-center justify-center">


                    <img
                        src="/logoP.gif"
                        alt="Profile"
                        className="relative z-10 w-84 h-64 lg:w-80 lg:h-100 object-cover "
                    />


                    {techIcons.map((item, i) => {
                        const angle = (i / techIcons.length) * 360;
                        return (
                            <div
                                key={i}
                                className="absolute text-2xl lg:text-4xl "
                                style={{
                                    transform: `rotate(${angle}deg) translate(220px) rotate(-${angle}deg)`,
                                }}
                            >
                                {item.icon}
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
