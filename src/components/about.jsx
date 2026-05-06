'use client';

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function About() {
    return (
        <section
            id="about"
            className="relative py-24 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.6em] text-primary mb-4 block">Discovery</span>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1 bg-primary mx-auto mt-8 rounded-full"
                    ></motion.div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left Side - Image */}
                    <motion.div
                        className="relative group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
                        <div className="relative p-2 bg-gradient-to-br from-primary/20 to-transparent rounded-[2.5rem] border border-white/10">
                            <img
                                src="/profile.png"
                                alt="Profile"
                                className="w-full aspect-[4/5] object-cover rounded-[2rem] shadow-2xl transition-all duration-700 group-hover:scale-[1.01] group-hover:grayscale-0 grayscale-[20%]"
                            />
                        </div>

                        {/* Experience Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-6 -right-6 cinematic-glass p-6 rounded-2xl border border-primary/20 hidden md:block"
                        >
                            <span className="block text-3xl font-display font-bold text-primary">1+</span>
                            <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-muted)]">Year Experience</span>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Text */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-2">
                            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Biographical</span>
                            <h3 className="text-4xl md:text-5xl font-display font-bold">
                                I'm <span className="text-gradient">Gavrawa Thilakshana</span>
                            </h3>
                        </div>

                        <div className="space-y-6 text-base md:text-lg text-[var(--text-muted)] leading-relaxed font-light">
                            <p>
                                I am a results-driven <span className="text-[var(--text-main)] font-semibold">Full Stack Software Engineer</span> with a deep passion for architecting high-performance digital ecosystems. My expertise lies in the <span className="text-primary font-bold">Next.js</span> and <span className="text-primary font-bold">MERN stack</span>, where I transform complex business challenges into elegant, scalable software solutions.
                            </p>

                            <p>
                                My approach to development is rooted in <span className="text-[var(--text-main)] font-medium">Precision and Innovation</span>. Whether it's spearheading complex logistics platforms or designing intuitive restaurant management systems, I leverage <span className="text-primary font-medium">AI-driven methodologies</span> and modern best practices to ensure every line of code serves a purpose and every user interaction is seamless.
                            </p>

                            <p>
                                Beyond the frontend and backend, I am a firm believer in the power of robust infrastructure. With a solid foundation in <span className="text-[var(--text-main)] font-medium underline decoration-primary/30 decoration-2 underline-offset-8">Linux System Administration</span>, I am currently scaling my expertise into <span className="text-primary font-bold">Cloud Operations</span> and <span className="text-primary font-bold">AWS Architecture</span>. My goal is to bridge the gap between development and deployment, ensuring mission-critical applications are always resilient and highly available.
                            </p>

                            <p>
                                Driven by curiosity and a commitment to excellence, I don't just build websites; I build <span className="text-[var(--text-main)] font-medium">Digital Experiences</span> that empower businesses and leave a lasting impact.
                            </p>
                        </div>

                        {/* Resume Button */}
                        <div className="pt-8">
                            <motion.a
                                href="/cv/Gavrawa_Thilakshana.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="premium-button inline-flex items-center gap-4 px-10 py-5 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary-dark"
                            >
                                <FaDownload className="text-sm" />
                                <span className="uppercase tracking-[0.2em] text-[10px]">Download Resume</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
