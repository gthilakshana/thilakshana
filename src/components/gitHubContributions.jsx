'use client';

import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

export default function GitHubContributions() {
    return (
        <section id="github" className="relative py-12 md:py-24 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] -z-10 rounded-full"></div>
            
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-6 md:px-16"
            >
                <div className="cinematic-glass p-8 md:p-16 rounded-[3rem] border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 relative z-10">
                        <div className="text-center md:text-left">
                            <span className="text-xs font-bold uppercase tracking-[0.6em] text-primary mb-4 block">Activity</span>
                            <h3 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter leading-none mb-4">
                                GitHub <span className="text-gradient">Contributions</span>
                            </h3>
                            <p className="text-[var(--text-muted)] text-sm md:text-base font-light max-w-md">
                                Visualizing daily coding consistency and open-source commitments across various projects.
                            </p>
                        </div>
                        
                        <a 
                            href="https://github.com/gthilakshana" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="premium-button px-10 py-5 bg-primary text-white text-xs font-bold uppercase tracking-[0.3em] rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all group/btn"
                        >
                            View Full Profile
                        </a>
                    </div>

                    <div className="flex justify-center overflow-x-auto pb-6 custom-scrollbar relative z-10">
                        <div className="min-w-[850px] flex justify-center scale-90 md:scale-100 transition-transform duration-500">
                            <GitHubCalendar
                                username="gthilakshana"
                                blockSize={14}
                                blockMargin={5}
                                fontSize={14}
                                theme={{
                                    light: ['#f0f9ff', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9'],
                                    dark: ['#111827', '#082f49', '#075985', '#0369a1', '#0ea5e9'],
                                }}
                            />
                        </div>
                    </div>
                    
                    <div className="mt-12 flex items-center justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-sm bg-[#111827] border border-white/5"></div>
                            <span>Less</span>
                        </div>
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-sm bg-[#082f49]"></div>
                            <div className="w-3 h-3 rounded-sm bg-[#075985]"></div>
                            <div className="w-3 h-3 rounded-sm bg-[#0369a1]"></div>
                            <div className="w-3 h-3 rounded-sm bg-[#0ea5e9]"></div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>More</span>
                            <div className="w-3 h-3 rounded-sm bg-[#0ea5e9] shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
