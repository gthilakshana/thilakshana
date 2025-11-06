import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaGithub, FaBehance } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../components/data/projectsData.js";

export default function Projects() {
    const [showMore, setShowMore] = useState(false);
    const initialCount = 3;
    const displayedProjects = showMore ? projects : projects.slice(0, initialCount);

    return (
        <section
            id="projects"
            className="bg-gray-50 to-white text-gray-900 py-20 px-6 md:px-16 font-inter border-b border-gray-200"
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 max-w-6xl mx-auto gap-4 md:gap-0"
            >
                <div>
                    <p className="text-sm font-medium text-gray-500 tracking-wide uppercase">
                        Recent Projects
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
                        <FaCode className="text-yellow-600 text-xl" />
                        Featured Work
                    </h2>
                </div>

                <div className="flex gap-3">

                    <a
                        href="https://github.com/gthilakshana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-5 py-2 bg-gray-900 text-white text-xs rounded-full shadow-md hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out flex items-center gap-2"
                    >
                        <FaGithub className="text-sm group-hover:text-yellow-600 transition" />
                        GitHub
                        <FaArrowRight className="text-sm group-hover:translate-x-1 transition" />
                    </a>


                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-5 py-2 bg-[#1769ff] text-white text-xs rounded-full shadow-md hover:bg-[#1659d6] hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out flex items-center gap-2"
                    >
                        <FaBehance className="text-lg group-hover:text-yellow-300 transition" />
                        Behance
                        <FaArrowRight className="text-sm group-hover:translate-x-1 transition" />
                    </a>
                </div>
            </motion.div>

            {/* Project Cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {displayedProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>

            {/* Show More / Less Button */}
            {projects.length > initialCount && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-10 flex justify-center"
                >
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-gray-900 text-white font-medium shadow-md hover:bg-yellow-600 hover:text-white hover:shadow-lg transition-all duration-300"
                    >
                        {showMore ? (
                            <>
                                <ChevronUp size={20} />
                                Show Less
                            </>
                        ) : (
                            <>
                                <ChevronDown size={20} />
                                Show More
                            </>
                        )}
                    </button>
                </motion.div>
            )}
        </section>
    );
}
