import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden border border-gray-600 
                       transition-all duration-500 sm:h-[480px] h-auto  w-full
"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            {/* Image / Video Section */}
            <motion.div
                className="w-full sm:h-[200px] h-[180px] overflow-hidden relative"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
            >
                {project.video ? (
                    <motion.video
                        src={project.video}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                    />
                ) : (
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                    />
                )}

                {/* Mobile gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 
                                bg-gradient-to-t from-white via-transparent sm:hidden"></div>
            </motion.div>

            {/* Content Section */}
            <motion.div
                className="flex flex-col justify-between flex-grow sm:p-6 p-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
            >
                {/* Title + Description */}
                <motion.div variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
                    <motion.h3
                        className="text-lg font-semibold text-gray-900 mb-2 truncate"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        {project.title}
                    </motion.h3>

                    <motion.p
                        className="text-gray-600 text-sm leading-relaxed"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                    >
                        {expanded
                            ? project.description
                            : project.description.slice(0, 120) +
                            (project.description.length > 120 ? "..." : "")}
                    </motion.p>

                    {/* See More Button Animation */}
                    {project.description.length > 120 && (
                        <motion.button
                            onClick={() => setExpanded(!expanded)}
                            className="text-yellow-500 hover:text-yellow-600 font-medium text-sm mt-2"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {expanded ? "See Less" : "See More"}
                        </motion.button>
                    )}
                </motion.div>

                {/* Footer Links */}
                <motion.div
                    className="mt-5 flex flex-wrap items-center justify-start gap-4 pt-3 border-t border-gray-200"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    {project.github && (
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm font-medium text-gray-900 hover:text-yellow-500 transition"
                            whileHover={{ x: 5 }}
                        >
                            <motion.span whileHover={{ rotate: -10 }}>
                                <FaGithub className="mr-2 text-sm" />
                            </motion.span>
                            GitHub
                        </motion.a>
                    )}

                    {project.demo && (
                        <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm font-medium text-gray-900 hover:text-red-500 transition"
                            whileHover={{ x: 5 }}
                        >
                            <motion.span whileHover={{ rotate: 10 }}>
                                <FiExternalLink className="mr-2 text-sm" />
                            </motion.span>
                            Live Demo
                        </motion.a>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
