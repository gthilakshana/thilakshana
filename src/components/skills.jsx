'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
    FaNodeJs, FaJava, FaReact, FaFigma, FaLinux, FaAws, FaPython, FaGitAlt
} from "react-icons/fa";
import {
    SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiPostman,
    SiNextdotjs, SiSupabase, SiSanity, SiTypescript, SiFramer, SiDocker
} from "react-icons/si";
import { Code2, Server, Wrench, Palette } from "lucide-react";

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Mastery",
            icon: <Code2 className="w-5 h-5" />,
            skills: [
                { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
                { icon: <FaReact />, name: "React.js", color: "text-sky-400" },
                { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-500" },
                { icon: <SiTailwindcss />, name: "Tailwind", color: "text-teal-400" },
                { icon: <SiFramer />, name: "Framer Motion", color: "text-pink-500" },
            ]
        },
        {
            title: "Backend & Systems",
            icon: <Server className="w-5 h-5" />,
            skills: [
                { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
                { icon: <SiExpress />, name: "Express.js", color: "text-gray-400" },
                { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
                { icon: <SiSupabase />, name: "Supabase", color: "text-emerald-500" },
                { icon: <SiMysql />, name: "MySQL", color: "text-blue-400" },
                { icon: <FaPython />, name: "Python", color: "text-yellow-500" },
            ]
        },
        {
            title: "Infrastructure & Tools",
            icon: <Wrench className="w-5 h-5" />,
            skills: [
                { icon: <FaAws />, name: "AWS", color: "text-orange-400" },
                { icon: <FaLinux />, name: "Linux", color: "text-gray-300" },
                { icon: <SiDocker />, name: "Docker", color: "text-blue-500" },
                { icon: <FaGitAlt />, name: "Git", color: "text-red-400" },
                { icon: <SiPostman />, name: "Postman", color: "text-orange-500" },
            ]
        },
        {
            title: "Design & Others",
            icon: <Palette className="w-5 h-5" />,
            skills: [
                { icon: <FaFigma />, name: "Figma UI/UX", color: "text-pink-400" },
                { icon: <SiSanity />, name: "Sanity.io", color: "text-red-500" },
                { icon: <FaJava />, name: "Java Core", color: "text-red-500" },
            ]
        }
    ];



    return (
        <section id="skills" className="relative py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 text-primary mb-6">
                        <div className="h-[1px] w-8 bg-primary"></div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Expertise</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none mb-8">
                        Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <p className="text-[var(--text-muted)] text-base md:text-xl font-light max-w-2xl leading-relaxed">
                        A specialized collection of technologies I leverage to build scalable, high-performance digital ecosystems.
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: catIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    {category.icon}
                                </div>
                                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white/80">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {category.skills.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="bg-white/5 border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group cursor-pointer hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-300"
                                    >
                                        <div className="text-3xl transition-all duration-500 group-hover:scale-110">
                                            <span className={skill.color}>{skill.icon}</span>
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] group-hover:text-primary transition-colors text-center">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 blur-[120px] -z-10"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 blur-[120px] -z-10"></div>
        </section>
    );
}
