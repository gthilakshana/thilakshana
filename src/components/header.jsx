import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
    FaHome,
    FaIdCard,
    FaProjectDiagram,
    FaTools,
    FaEnvelope,
    FaUserGraduate,
} from "react-icons/fa";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
        setIsOpen(false);
    };

    const goToLogin = () => {
        navigate("/login");
    };


    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((sec) => observer.observe(sec));
        return () => sections.forEach((sec) => observer.unobserve(sec));
    }, []);

    const sections = [
        { name: "home", icon: <FaHome /> },
        { name: "about", icon: <FaIdCard /> },
        { name: "resume", icon: <FaUserGraduate /> },
        { name: "projects", icon: <FaProjectDiagram /> },
        { name: "skills", icon: <FaTools /> },
        { name: "contact", icon: <FaEnvelope /> },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md border-b-2 border-gray-700">
            <div className="w-full mx-auto flex items-center justify-between px-6 md:px-8 py-4">
                <Link to="/">
                    <div className="inline-block rounded-md">
                        <img
                            src="logo.png"
                            alt="Thilakshana Logo"
                            className="h-9 md:h-12 w-[155px] sm:w-[150px] md:w-[220px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-4 text-base uppercase items-center justify-end font-medium w-[80%]">
                    {sections.map((section) => (
                        <div
                            key={section.name}
                            className={`cursor-pointer h-full px-3 flex items-center justify-center gap-2 transition-colors duration-300 ${activeSection === section.name
                                ? "bg-gray-800 text-white"
                                : "bg-transparent text-white hover:bg-gray-700 hover:text-yellow-400"
                                }`}
                            onClick={() => handleScroll(section.name)}
                        >
                            <span>{section.name.charAt(0).toUpperCase() + section.name.slice(1)}</span>
                        </div>

                    ))}

                    <div
                        className="p-2 text-white text-[18px] hover:text-yellow-400 transition-colors cursor-pointer border-2 border-gray-50  rounded-full "
                        onClick={goToLogin}
                    >
                        <FaUser />
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-white text-1xl focus:outline-none cursor-pointer hover:text-yellow-400 transition-colors"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "translate-x-full"} 
          bg-gray-900 text-white shadow-2xl z-[10000]`}
            >
                <nav className="flex flex-col mt-6 space-y-2 px-6">
                    {sections.map((section) => (
                        <div
                            key={section.name}
                            className={`flex items-center gap-4 py-2 px-3 cursor-pointer transition-colors ${activeSection === section.name
                                ? "bg-gray-700 text-white"
                                : "hover:bg-gray-800"
                                }`}
                            onClick={() => handleScroll(section.name)}
                        >
                            <span className="text-xl">{section.icon}</span>
                            <span className="text-md">{section.name.charAt(0).toUpperCase() + section.name.slice(1)}</span>
                        </div>
                    ))}
                </nav>

                <div
                    className="flex items-center gap-4 py-2 px-6 mt-6 cursor-pointer hover:bg-yellow-400 transition-colors absolute bottom-6 w-full"
                    onClick={goToLogin}
                >
                    <FaUser className="text-xl" />
                    <span className="text-md">Login</span>
                </div>
            </div>


            {isOpen && <div className="fixed inset-0" onClick={toggleMenu}></div>}
        </header>
    );
}
