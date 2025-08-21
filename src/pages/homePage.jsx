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
import { ClimbingBoxLoader } from "react-spinners";

export default function Home() {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [loadingSections, setLoadingSections] = useState(true); // <-- fixed here
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


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingSections(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen w-full flex flex-col">
            <Header />


            {loadingSections ? (
                <div className="flex-1 flex items-center justify-center bg-white">
                    <ClimbingBoxLoader color="#FACC3E" loading={loadingSections} size={15} />
                </div>
            ) : (
                <>
                    <HomeView />
                    <About />
                    <Resume />
                    <Projects />
                    <Skills />
                    <Contact />
                    <Footer />
                </>
            )}

            {/* Scroll To Top Button */}
            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 cursor-pointer bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full shadow-lg transition animate-bounce"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
}
