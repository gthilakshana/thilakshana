import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

import Header from "../components/header";
import Footer from "../components/footer";
import About from "../components/about";
import Contact from "../components/contact";
import Resume from "../components/resume";
import Projects from "../components/projects";
import Skills from "../components/skills";
import HomeView from "../components/homeView";

export default function Home() {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [loadingSections, setLoadingSections] = useState(true);


    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        const timer = setTimeout(() => setLoadingSections(false), 3000); // 3 seconds
        return () => clearTimeout(timer);
    }, []);


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen w-full overflow-hidden ">


            {loadingSections ? (
                <div className="flex items-center justify-center h-screen bg-gray-50">
                    <img
                        src="logoP.png"
                        alt="Thilakshana Logo"
                        className="h-9 md:h-12 w-[155px] sm:w-[150px] md:w-[220px] 
                        object-cover animate-pulse opacity-90 transition-all duration-500"
                    />
                </div>
            ) : (
                <>
                    <Header />
                    <HomeView />
                    <About />
                    <Resume />
                    <Projects />
                    <Skills />
                    <Contact />
                    <Footer />
                </>
            )}


            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-0 right-6 z-50 bg-yellow-600 hover:bg-yellow-700 
                    text-white p-3  shadow-xl transition"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
}
