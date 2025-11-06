import { motion } from "framer-motion";
import {
    FaNodeJs, FaJava, FaReact, FaFigma, FaLinux, FaHtml5, FaCss3Alt,
    FaBootstrap, FaGitAlt, FaAws, FaPython, FaCuttlefish
} from "react-icons/fa";
import {
    SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiPostman,
    SiDocker, SiJenkins, SiUbuntu, SiCentos
} from "react-icons/si";
import { useState, useEffect } from "react";

export default function Skills() {
    const skills = [
        { icon: <FaNodeJs />, name: "Node.js", color: "text-green-600", bg: "bg-green-50" },
        { icon: <SiExpress />, name: "Express.js", color: "text-gray-700", bg: "bg-gray-50" },
        { icon: <FaJava />, name: "Java", color: "text-red-600", bg: "bg-red-50" },
        { icon: <FaCuttlefish />, name: "C++", color: "text-indigo-600", bg: "bg-indigo-50" },
        { icon: <FaPython />, name: "Python", color: "text-yellow-600", bg: "bg-yellow-50" },
        { icon: <FaReact />, name: "React.js", color: "text-sky-500", bg: "bg-sky-50" },
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-700", bg: "bg-green-50" },
        { icon: <SiMysql />, name: "MySQL", color: "text-blue-700", bg: "bg-blue-50" },
        { icon: <FaFigma />, name: "UI/UX, Figma", color: "text-pink-500", bg: "bg-pink-50" },
        { icon: <FaLinux />, name: "Linux", color: "text-gray-800", bg: "bg-gray-50" },
        { icon: <SiUbuntu />, name: "Ubuntu", color: "text-orange-500", bg: "bg-orange-50" },
        { icon: <SiCentos />, name: "CentOS", color: "text-purple-600", bg: "bg-purple-50" },
        { icon: <FaHtml5 />, name: "HTML", color: "text-orange-600", bg: "bg-orange-50" },
        { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-600", bg: "bg-blue-50" },
        { icon: <FaBootstrap />, name: "Bootstrap", color: "text-violet-600", bg: "bg-violet-50" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-teal-500", bg: "bg-teal-50" },
        { icon: <FaGitAlt />, name: "Git, GitHub", color: "text-red-500", bg: "bg-red-50" },
        { icon: <FaAws />, name: "AWS", color: "text-orange-500", bg: "bg-orange-50" },
        { icon: <SiPostman />, name: "Postman", color: "text-orange-600", bg: "bg-orange-50" },
        { icon: <SiDocker />, name: "Docker", color: "text-blue-500", bg: "bg-blue-50" },
        { icon: <SiJenkins />, name: "Jenkins", color: "text-red-700", bg: "bg-red-50" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.06 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    const fullText = "Skills";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!deleting) {
                // Typing letters
                setDisplayedText(fullText.slice(0, index + 1));
                setIndex(index + 1);
                if (index + 1 === fullText.length) {
                    setDeleting(true);
                }
            } else {

                setDisplayedText(fullText.slice(0, index - 1));
                setIndex(index - 1);
                if (index - 1 === 0) {
                    setDeleting(false);
                }
            }
        }, 150);

        return () => clearInterval(interval);
    }, [index, deleting]);

    return (
        <section id="skills" className=" bg-gray-50 py-20 px-6 md:px-16 border-b border-gray-200">
            <motion.div
                className="max-w-6xl mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10 text-center uppercase text-gray-800">
                    {displayedText}
                    <span className="animate-blink">|</span>
                    <style jsx>{`
        .animate-blink {
          display: inline-block;
          width: 1ch;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
                </h2>

                <motion.p
                    className="text-gray-600 mb-14 max-w-2xl mx-auto text-lg"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Tools and technologies I use to build elegant, high-performance web solutions.
                </motion.p>

                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center"
                    variants={containerVariants}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="cursor-pointer flex flex-col items-center p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
                            variants={itemVariants}
                            whileHover={{ scale: 1.04 }}
                        >
                            <div className={`w-14 h-14 flex items-center justify-center rounded-full ${skill.bg} mb-4`}>
                                <span className={`text-3xl ${skill.color}`}>{skill.icon}</span>
                            </div>
                            <p className="text-gray-700 font-medium text-sm tracking-wide">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
