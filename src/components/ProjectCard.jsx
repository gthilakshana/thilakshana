import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden 
                 transition-all duration-500 sm:h-[480px] h-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            {/* Image / Video Section */}
            <div className="w-full sm:h-[200px] h-[180px] overflow-hidden relative">
                {project.video ? (
                    <motion.video
                        src={project.video}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                    />
                ) : (
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                    />
                )}
                {/* Gradient overlay for mobile readability */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-transparent sm:hidden"></div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between flex-grow sm:p-6 p-4">
                {/* Title and Description */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">
                        {project.title}
                    </h3>

                    <p className="text-gray-600 text-sm  leading-relaxed">
                        {expanded
                            ? project.description
                            : project.description.slice(0, 120) +
                            (project.description.length > 120 ? "..." : "")}
                    </p>

                    {project.description.length > 120 && (
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="text-yellow-500 hover:text-yellow-600 font-medium text-sm mt-2"
                        >
                            {expanded ? "See Less" : "See More"}
                        </button>
                    )}
                </div>

                {/* Footer Links */}
                <div className="mt-5 flex flex-wrap items-center justify-start gap-4 pt-3 border-t border-gray-200">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm  font-medium text-gray-900 hover:text-yellow-500 transition"
                        >
                            <FaGithub className="mr-2 text-sm" /> GitHub
                        </a>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm  font-medium text-gray-900 hover:text-red-500 transition"
                        >
                            <FiExternalLink className="mr-2 text-sm" /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
