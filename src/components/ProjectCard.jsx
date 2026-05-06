'use client';

import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative flex flex-col bg-[var(--bg-main)] border border-[var(--glass-border)] rounded-2xl overflow-hidden h-full hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
        >
            {/* Image / Video Section */}
            <div className="relative aspect-video overflow-hidden">
                {project.video ? (
                    <video
                        src={project.video}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                ) : (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-primary transition-all duration-300 hover:scale-110">
                            <FaGithub className="text-xl" />
                        </a>
                    )}
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-primary transition-all duration-300 hover:scale-110">
                            <FiExternalLink className="text-xl" />
                        </a>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                    </h3>
                </div>

                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 font-light">
                    {expanded
                        ? project.description
                        : project.description.slice(0, 90) + (project.description.length > 90 ? "..." : "")}
                </p>

                {project.description.length > 90 && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] hover:text-primary-dark transition-colors mb-6 self-start"
                    >
                        {expanded ? "Less Details" : "Project Details"}
                    </button>
                )}

                <div className="mt-auto pt-6 border-t border-[var(--glass-border)] flex flex-wrap gap-2">
                    {project.tech?.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-primary/5 text-primary text-[9px] font-bold rounded-lg uppercase tracking-widest border border-primary/10">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
