import { useState, useRef, useEffect } from "react";
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
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;


            setShowScrollButton(currentScrollY > 200);

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen w-full flex flex-col">
            <Header />
            <HomeView />
            <About />
            <Resume />
            <Projects />
            <Skills />
            <Contact />
            <Footer />

            {/* Scroll To Top Button */}
            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition animate-bounce"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
}
