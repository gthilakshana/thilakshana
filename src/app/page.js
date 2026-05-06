'use client';

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import Header from "../components/header";
import Footer from "../components/footer";
import About from "../components/about";
import Contact from "../components/contact";
import Resume from "../components/resume";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Services from "../components/services";
import FAQ from "../components/faq";
import HomeView from "../components/homeView";
import Preloader from "../components/preloader";

export default function Home() {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2800); // Wait for preloader animation
        return () => clearTimeout(timer);
    }, []);

    const [sectionOrder, setSectionOrder] = useState([]);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const res = await fetch('/api/settings/order');
                const data = await res.json();
                setSectionOrder(data);
            } catch (err) {
                setSectionOrder(['about', 'services', 'resume', 'projects', 'skills', 'faq', 'contact']);
            }
        };
        fetchOrder();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const componentMap = {
        about: <About key="about" />,
        services: <Services key="services" />,
        resume: <Resume key="resume" />,
        projects: <Projects key="projects" />,
        skills: <Skills key="skills" />,
        faq: <FAQ key="faq" />,
        contact: <Contact key="contact" />
    };

    return (
        <div className="min-h-screen w-full overflow-hidden">
            <AnimatePresence>
                {isLoading && <Preloader key="loader" />}
            </AnimatePresence>

            {!isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative">
                        <Header />
                        <HomeView />
                        {sectionOrder.length > 0 ? (
                            sectionOrder.map(key => componentMap[key])
                        ) : (
                            <>
                                <About />
                                <Services />
                                <Resume />
                                <Projects />
                                <Skills />
                                <FAQ />
                                <Contact />
                            </>
                        )}
                        <Footer />
                    </div>
                </motion.div>
            )}

            <AnimatePresence>
                {showScrollButton && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        onClick={scrollToTop}
                        className="
                            fixed bottom-8 right-6 z-[100] 
                            w-12 h-12 flex items-center justify-center
                            cinematic-glass rounded-2xl
                            text-primary border border-primary/20
                            shadow-2xl shadow-primary/20
                            hover:scale-110 active:scale-95
                            hover:bg-primary hover:text-white hover:border-primary
                            transition-all duration-500 group
                        "
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
