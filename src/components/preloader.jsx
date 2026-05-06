'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>

            <div className="relative flex flex-col items-center">
                {/* Logo Font Stylized */}
                <div className="flex items-baseline gap-1 mb-8 overflow-hidden">
                    <motion.span 
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-7xl md:text-9xl font-black text-primary logo-font"
                    >
                        G
                    </motion.span>
                    <motion.div 
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col"
                    >
                        <span className="text-2xl md:text-4xl font-bold tracking-tighter text-white logo-font">Thilakshana</span>
                        <span className="text-[10px] tracking-[0.6em] uppercase text-primary font-bold">Portfolio</span>
                    </motion.div>
                </div>

                {/* Progress Container */}
                <div className="w-64 md:w-80 h-[2px] bg-white/5 relative overflow-hidden rounded-full mb-4">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="absolute h-full bg-primary shadow-[0_0_15px_rgba(14,165,233,0.8)]"
                    />
                </div>

                {/* Percentage Display */}
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Loading Environment</span>
                    <span className="text-xs font-black text-primary tabular-nums">{progress}%</span>
                </div>
            </div>

            {/* Decorative bottom text */}
            <div className="absolute bottom-12 text-[10px] uppercase tracking-[0.5em] text-white/10 font-bold select-none">
                Innovation through design
            </div>
        </div>
    );
}
