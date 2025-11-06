import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isTopSection, setIsTopSection] = useState(true); // NEW: track if home section

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
        setIsOpen(false);
    };

    const sections = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Resume", id: "resume" },
        { name: "Projects", id: "projects" },
        { name: "Skills", id: "skills" },
        { name: "Contact", id: "contact" },
    ];

    useEffect(() => {
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 3;
            sections.forEach((item) => {
                const elem = document.getElementById(item.id);
                if (elem) {
                    const top = elem.offsetTop;
                    const bottom = top + elem.offsetHeight;
                    if (scrollPos >= top && scrollPos < bottom) {
                        setActiveSection(item.id);
                        window.history.replaceState(null, "", `${item.id}`);
                    }
                }
            });


            const homeElem = document.getElementById("home");
            if (homeElem) {
                setIsTopSection(window.scrollY + 50 < homeElem.offsetHeight);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 border-b border-white/30 shadow-sm transition-colors duration-300 ${isTopSection ? "text-white" : "text-gray-900"
                }`}
        >
            <div className="w-full mx-auto flex items-center justify-between px-6 md:px-8 py-4">


                <div className="inline-block rounded-md">
                    <a

                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                        }}

                    >
                        <img
                            src="logoP.png"
                            alt="Thilakshana Logo"
                            className="h-9 md:h-12 w-[155px] sm:w-[150px] md:w-[220px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                        />
                    </a>
                </div>


                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-4 text-sm uppercase items-center justify-end font-medium w-[80%]">
                    {sections.map((item) => (
                        <div
                            key={item.id}
                            className={`cursor-pointer py-3 px-3 flex items-center justify-center gap-2 transition-all duration-300 ${activeSection === item.id
                                ? "bg-white/40 shadow-sm"
                                : "hover:bg-white/20 hover:shadow-sm"
                                }`}
                            onClick={() => handleScroll(item.id)}
                        >
                            <span>{item.name}</span>
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-2xl focus:outline-none cursor-pointer hover:text-yellow-400 transition-colors"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-screen w-64 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } bg-white/100 text-gray-900 shadow-2xl z-[10000] md:hidden`}
            >
                <nav className="flex flex-col flex-grow px-6 py-5 space-y-2 overflow-y-auto">
                    {sections.map((item) => (
                        <div
                            key={item.id}
                            className={`py-3 px-4 rounded-lg cursor-pointer text-sm transition-all duration-300 ${activeSection === item.id
                                ? "bg-white/80 text-gray-900 shadow-sm"
                                : "hover:bg-white/50 hover:shadow-sm hover:text-yellow-600 "
                                }`}
                            onClick={() => handleScroll(item.id)}
                        >
                            {item.name}
                        </div>
                    ))}
                </nav>
            </div>

            {isOpen && <div className="fixed inset-0" onClick={toggleMenu}></div>}
        </header>
    );
}
