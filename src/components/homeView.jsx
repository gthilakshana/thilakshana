'use client';

import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useAnimationFrame } from "framer-motion";
import { useEffect, useState, useRef, useMemo } from "react";
import SocialButtons from "./socialButtons";
import FloatingSocialBar from "./floatingSocialBar";
import { SiNextdotjs, SiReact, SiNodedotjs, SiTailwindcss, SiJavascript, SiFigma } from "react-icons/si";
import { ChevronRight, Play, X, Trophy, RefreshCw } from "lucide-react";

const FloatingIcon = ({ icon: Icon, delay, duration, initialX, initialY, keyframesX, keyframesY }) => (
    <motion.div
        initial={{ x: initialX, y: initialY, opacity: 0 }}
        animate={{
            x: keyframesX, y: keyframesY,
            opacity: [0, 0.9, 0.9, 0],
            rotate: [0, 180, 360],
            scale: [0.8, 1.1, 0.8]
        }}
        transition={{ duration: duration, repeat: Infinity, delay: delay, ease: "easeInOut" }}
        className="absolute text-primary/60 pointer-events-none z-0"
        style={{ fontSize: 45 }}
    ><Icon /></motion.div>
);

export default function HomeView() {
    const [isGameActive, setIsGameActive] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [finalScore, setFinalScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const playerY = useMotionValue(0);
    const playerVisualY = useTransform(playerY, v => -v);
    
    // Game Refs (Avoids State re-renders)
    const scoreRef = useRef(0);
    const obstaclesRef = useRef([]);
    const velocity = useRef(0);
    const isJumping = useRef(false);
    const gameContainerRef = useRef(null);
    const scoreDisplayRef = useRef(null);

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    const [textIndex, setTextIndex] = useState(0);
    const texts = ["FULL STACK DEVELOPER", "UI/UX DESIGNER", "PROBLEM SOLVER"];

    useEffect(() => {
        const interval = setInterval(() => { setTextIndex((prev) => (prev + 1) % texts.length); }, 3000);
        return () => clearInterval(interval);
    }, []);

    const startGame = () => {
        setIsGameActive(true);
        setIsGameOver(false);
        scoreRef.current = 0;
        playerY.set(0);
        velocity.current = 0;
        isJumping.current = false;
        obstaclesRef.current = [];
        if (gameContainerRef.current) gameContainerRef.current.innerHTML = '';
    };

    const handleJump = () => {
        if (!isGameActive || isGameOver || isJumping.current) return;
        isJumping.current = true;
        velocity.current = 14;
    };

    useAnimationFrame((time, delta) => {
        if (!isGameActive || isGameOver) return;

        // 1. Physics
        if (isJumping.current) {
            const currentY = playerY.get() + velocity.current;
            velocity.current -= 0.6;
            if (currentY <= 0) { playerY.set(0); isJumping.current = false; velocity.current = 0; }
            else { playerY.set(currentY); }
        }

        // 2. Score
        scoreRef.current += 1;
        if (scoreDisplayRef.current) scoreDisplayRef.current.innerText = Math.floor(scoreRef.current / 10);

        // 3. Obstacles logic
        if (time % 1500 < 20) {
            const id = Date.now();
            const ob = document.createElement('div');
            ob.id = `ob-${id}`;
            ob.className = "absolute bottom-0 w-10 h-10 bg-primary/20 border border-primary/40 rounded-lg flex items-center justify-center text-primary text-xl z-10";
            ob.style.left = '110%';
            ob.innerHTML = '<span>#</span>'; // Simple obstacle icon
            gameContainerRef.current?.appendChild(ob);
            obstaclesRef.current.push({ id, x: 110, element: ob });
        }

        obstaclesRef.current.forEach((ob, index) => {
            ob.x -= 0.8 * (delta / 16);
            if (ob.element) ob.element.style.left = `${ob.x}%`;
            
            // Collision
            if (ob.x > 8 && ob.x < 18 && playerY.get() < 40) {
                setFinalScore(Math.floor(scoreRef.current / 10));
                setIsGameOver(true);
                setIsGameActive(false);
            }
        });

        // Cleanup off-screen
        obstaclesRef.current = obstaclesRef.current.filter(ob => {
            if (ob.x < -10) { ob.element?.remove(); return false; }
            return true;
        });
    });

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isGameActive && (e.code === 'Space' || e.code === 'ArrowUp')) {
                e.preventDefault();
                handleJump();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isGameActive]);

    useEffect(() => { if (finalScore > highScore) setHighScore(finalScore); }, [finalScore]);

    const iconsList = useMemo(() => {
        const baseIcons = [SiNextdotjs, SiReact, SiNodedotjs, SiTailwindcss, SiJavascript, SiFigma];
        return Array(20).fill(null).map((_, i) => ({
            Icon: baseIcons[i % baseIcons.length],
            delay: i * 1.5,
            duration: 25 + Math.random() * 15,
            initialX: `${Math.random() * 100}vw`,
            initialY: `${Math.random() * 100}vh`,
            keyframesX: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`, `${Math.random() * 100}vw`],
            keyframesY: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
        }));
    }, []);

    return (
        <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 outline-none">
            <div className="absolute inset-0 z-0 opacity-60">
                {iconsList.map((item, index) => (
                    <FloatingIcon key={index} icon={item.Icon} delay={item.delay} duration={item.duration} initialX={item.initialX} initialY={item.initialY} keyframesX={item.keyframesX} keyframesY={item.keyframesY} />
                ))}
            </div>

            <motion.div style={{ y: y1, opacity }} className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 flex flex-col items-center text-center">
                <motion.div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-8">
                    <span className="relative flex h-2 w-2"><span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-75"></span><span className="relative h-2 w-2 rounded-full bg-primary"></span></span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary">Available for new projects</span>
                </motion.div>
                <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-display font-black uppercase tracking-tighter leading-[0.8] mb-8 select-none">
                    <span className="block">Gavrawa</span>
                    <span className="block text-gradient py-2">Thilakshana</span>
                </h1>
                <div className="mb-14">
                    <motion.p key={textIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs md:text-sm font-bold uppercase text-primary tracking-[0.4em]">{texts[textIndex]}</motion.p>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto px-4 sm:px-0">
                    <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="premium-button w-full sm:w-auto px-10 py-5 bg-primary text-white font-bold rounded-2xl flex items-center justify-center gap-3"><span className="uppercase tracking-widest text-[10px]">Projects</span><ChevronRight size={14} /></button>
                    <button onClick={startGame} className="premium-button w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl flex items-center justify-center gap-3"><Play size={14} className="text-primary" /><span className="uppercase tracking-widest text-[10px]">Play Mini Game</span></button>
                </div>
            </motion.div>

            {/* GAME OVERLAY */}
            <AnimatePresence>
                {isGameActive && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[500] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center cursor-pointer" onClick={handleJump}>
                        <button onClick={(e) => { e.stopPropagation(); setIsGameActive(false); }} className="absolute top-8 right-8 p-4 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-[600]"><X size={24} /></button>
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-black uppercase tracking-tighter text-primary mb-2">Dev Runner</h2>
                            <div className="flex gap-8 justify-center">
                                <div className="text-xs font-bold uppercase tracking-widest text-white/40">Score: <span ref={scoreDisplayRef} className="text-white">0</span></div>
                                <div className="text-xs font-bold uppercase tracking-widest text-primary">High: {highScore}</div>
                            </div>
                        </div>
                        <div className="relative w-full max-w-4xl h-48 border-b-2 border-white/10 overflow-hidden">
                            <motion.div style={{ y: playerVisualY }} className="absolute left-20 bottom-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-[0_0_40px_rgba(14,165,233,0.7)] z-20"><span className="font-black text-3xl">G</span></motion.div>
                            <div ref={gameContainerRef} className="absolute inset-0"></div>
                        </div>
                        <p className="mt-12 text-[10px] uppercase tracking-[0.5em] text-white/30 animate-pulse">Tap or Space to Jump</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* GAME OVER MODAL */}
            <AnimatePresence>
                {isGameOver && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[700] flex items-center justify-center p-6 bg-black/80 backdrop-blur-lg">
                        <div className="w-full max-w-sm cinematic-glass p-12 rounded-[3rem] border border-primary/20 text-center">
                            <Trophy className="w-16 h-16 text-primary mx-auto mb-6" />
                            <h2 className="text-3xl font-black uppercase tracking-widest mb-2">Game Over</h2>
                            <p className="text-white/40 text-sm mb-10">Score: {finalScore}</p>
                            <div className="flex flex-col gap-4">
                                <button onClick={startGame} className="w-full py-5 bg-primary text-white font-bold rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-all"><RefreshCw size={20} /> Try Again</button>
                                <button onClick={(e) => { e.stopPropagation(); setIsGameOver(false); setIsGameActive(false); }} className="w-full py-5 bg-white/5 text-white/60 font-bold rounded-2xl hover:bg-white/10 transition-all">Exit Game</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="absolute left-8 bottom-12 hidden lg:block z-20"><SocialButtons /></div>
            <FloatingSocialBar />
        </section>
    );
}
