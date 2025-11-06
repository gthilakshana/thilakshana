import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaGithub, FaBehance } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../components/data/projectsData.js";
import GitHubContributions from "./gitHubContributions.jsx";

export default function Projects() {
    const [showMore, setShowMore] = useState(false);
    const initialCount = 3;
    const displayedProjects = showMore ? projects : projects.slice(0, initialCount);

    return (
        <section
            id="projects"
            className="bg-gradient-to-b from-gray-50 to-white text-gray-900 py-20 px-6 md:px-16 font-inter border-b border-gray-200"
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-start md:items-center 
                justify-between mb-16 max-w-6xl mx-auto gap-4 md:gap-0"
            >
                <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        Recent Projects
                    </p>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center gap-3">
                        <FaCode className="text-yellow-600 text-2xl" />
                        Featured Work
                    </h2>

                    <p className="text-gray-600 mt-2 text-sm md:text-base max-w-lg">
                        A selection of my recent development work, including full-stack apps,
                        UI/UX projects, and experimental builds.
                    </p>
                </div>

                {/* Social Buttons */}
                <div className="flex flex-wrap gap-3">
                    {/* GitHub */}
                    <a
                        href="https://github.com/gthilakshana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-5 py-2 bg-gray-900 text-white text-xs 
                        rounded-full shadow-md hover:bg-gray-800 hover:scale-[1.03] 
                        active:scale-95 transition-all duration-300 flex items-center gap-2"
                    >
                        <FaGithub className="text-base group-hover:text-yellow-400 transition" />
                        GitHub
                        <FaArrowRight className="text-sm group-hover:translate-x-1 transition" />
                    </a>

                    {/* Behance */}
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-5 py-2 bg-[#1769ff] text-white text-xs 
                        rounded-full shadow-md hover:bg-[#0f55d1] hover:scale-[1.03] 
                        active:scale-95 transition-all duration-300 flex items-center gap-2"
                    >
                        <FaBehance className="text-lg group-hover:text-yellow-200 transition" />
                        Behance
                        <FaArrowRight className="text-sm group-hover:translate-x-1 transition" />
                    </a>
                </div>
            </motion.div>

            {/* Project Cards */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
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

            {/* Show More Button */}
            {projects.length > initialCount && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12 flex justify-center"
                >
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="flex items-center justify-center gap-2 
                        px-7 py-3 rounded-full bg-gray-900 text-white font-semibold
                        shadow-lg hover:bg-yellow-600 hover:text-white 
                        hover:shadow-xl transition-all duration-300"
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

            {/* GitHub Contributions Section */}
            <div className="mt-20">
                <GitHubContributions />
            </div>
        </section>
    );
}
