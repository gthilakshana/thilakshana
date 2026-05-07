'use client';

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, LayoutGrid, Filter, ExternalLink } from "lucide-react";
import ProjectCard from "./ProjectCard.jsx";
import GitHubContributions from "./gitHubContributions.jsx";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState("All");
    const [showMore, setShowMore] = useState(false);
    const [loading, setLoading] = useState(true);
    const initialCount = 4;

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('/api/projects');
                const data = await res.json();
                setProjects(data);
            } catch (err) {
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const filters = ["All", "Full Stack", "Frontend", "Mobile"];

    const filteredProjects = useMemo(() => {
        if (activeFilter === "All") return projects;
        return projects.filter(p => p.category === activeFilter);
    }, [activeFilter]);

    const displayedProjects = showMore ? filteredProjects : filteredProjects.slice(0, initialCount);

    const text = "A curated selection of my most impactful development work, from experimental prototypes to production-ready solutions.";
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const typingEffect = setTimeout(() => {
            if (!isDeleting && index < text.length) {
                setDisplayedText(text.substring(0, index + 1));
                setIndex(prev => prev + 1);
            } else if (isDeleting && index > 0) {
                setDisplayedText(text.substring(0, index - 1));
                setIndex(prev => prev - 1);
            } else if (index === text.length && !isDeleting) {
                // Pause at the end before deleting
                const pause = setTimeout(() => setIsDeleting(true), 3000);
                return () => clearTimeout(pause);
            } else if (index === 0 && isDeleting) {
                setIsDeleting(false);
            }
        }, isDeleting ? 30 : 60);
        
        return () => clearTimeout(typingEffect);
    }, [index, isDeleting]);

    const handleShowMore = () => {
        setShowMore(!showMore);
        if (showMore) {
            setTimeout(() => {
                const section = document.getElementById("projects");
                section?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 300);
        }
    };

    return (
        <section id="projects" className="relative py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                {/* Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-4 text-primary mb-6">
                            <div className="h-[1px] w-8 bg-primary"></div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Portfolio Showcase</span>
                        </div>

                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none mb-8">
                            Selected <span className="text-gradient">Projects</span>
                        </h2>

                        <p className="text-[var(--text-muted)] text-base md:text-xl font-light leading-relaxed max-w-2xl">
                            {displayedText}
                            <span className="text-primary animate-pulse ml-1">|</span>
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex gap-4"
                    >
                        <div className="text-right">
                            <span className="text-5xl font-display font-bold text-primary">{projects.length}</span>
                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mt-1">Total Case Studies</p>
                        </div>
                    </motion.div>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center gap-4 mb-16">
                    <div className="flex items-center gap-2 mr-4 text-[var(--text-muted)]">
                        <Filter size={14} className="text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Filter By:</span>
                    </div>
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => {
                                setActiveFilter(filter);
                                setShowMore(false);
                            }}
                            className={`px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                                activeFilter === filter
                                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                                    : "bg-white/5 text-[var(--text-muted)] border-white/5 hover:border-white/20 hover:bg-white/10"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Project Cards Grid */}
                <div id="projects-grid" className="min-h-[400px]">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-24 gap-4">
                            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--text-muted)]">Scanning Database...</p>
                        </div>
                    ) : (
                        <motion.div
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                        >
                            <AnimatePresence mode="popLayout">
                                {displayedProjects.map((project, i) => (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <ProjectCard project={project} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                        <LayoutGrid className="w-12 h-12 text-white/10 mx-auto mb-4" />
                        <p className="text-[var(--text-muted)] italic">No projects found in this category.</p>
                    </div>
                )}

                {/* Show More Button */}
                {filteredProjects.length > initialCount && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-20 flex justify-center"
                    >
                        <button
                            onClick={handleShowMore}
                            className="premium-button group relative inline-flex items-center gap-4 px-12 py-5 bg-[var(--bg-main)] border border-[var(--glass-border)] rounded-2xl text-[var(--text-main)] font-bold uppercase tracking-[0.2em] text-[10px] hover:border-primary/40 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            {showMore ? (
                                <>
                                    <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                                    Show Less Impact
                                </>
                            ) : (
                                <>
                                    <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
                                    Explore All {filteredProjects.length} Projects
                                </>
                            )}
                        </button>
                    </motion.div>
                )}

                {/* GitHub Section */}
                <div className="mt-32 pt-24 border-t border-[var(--glass-border)]">
                    <GitHubContributions />
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -z-10 rounded-full"></div>
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -z-10 rounded-full"></div>
        </section>
    );
}
