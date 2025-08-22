import { useState } from "react";
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
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    const goToLogin = () => {
        navigate("/login");
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md border-b-2 border-gray-700">
            <div className="w-full mx-auto flex items-center justify-between px-6 md:px-8 py-4">

                <Link to="/">
                    <div className="inline-block rounded-md">
                        <img
                            src="logo.png"
                            alt="Thilakshana Logo"
                            className="h-10 sm:h-12 md:h-12 w-[140px] sm:w-[150px] md:w-[220px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </Link>


                <nav className="hidden md:flex space-x-8 text-base uppercase items-center justify-end font-medium w-[80%]">
                    {["home", "about", "resume", "projects", "skills", "contact"].map(
                        (section) => (
                            <span
                                key={section}
                                className="cursor-pointer text-white hover:text-blue-500 transition-colors"
                                onClick={() => handleScroll(section)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </span>
                        )
                    )}


                    <span
                        className="p-3 text-white text-2xl hover:text-yellow-500 transition-colors cursor-pointer"
                        onClick={goToLogin}
                    >
                        <FaUser className="text-xl" />
                    </span>
                </nav>


                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-white text-2xl focus:outline-none"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>


            <div
                className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 
            ${isOpen ? "translate-x-0" : "translate-x-full"} 
           bg-gray-900 text-white shadow-2xl z-[10000]`}
            >

                <nav className="flex flex-col mt-6 space-y-2 px-6">
                    {[
                        { name: "Home", icon: <FaHome /> },
                        { name: "About", icon: <FaIdCard /> },
                        { name: "Resume", icon: <FaUserGraduate /> },
                        { name: "Projects", icon: <FaProjectDiagram /> },
                        { name: "Skills", icon: <FaTools /> },
                        { name: "Contact", icon: <FaEnvelope /> },
                    ].map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center gap-4 py-2 px-3 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
                            onClick={() => handleScroll(item.name.toLowerCase())}
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span className="text-md">{item.name}</span>
                        </div>
                    ))}
                </nav>


                <div
                    className="flex items-center gap-4 py-2 px-6 mt-6 cursor-pointer hover:bg-yellow-500 transition-colors absolute bottom-6 w-full"
                    onClick={goToLogin}
                >
                    <FaUser className="text-xl" />
                    <span className="text-md">Login</span>
                </div>
            </div>


            {isOpen && (
                <div
                    className="fixed inset-0 "
                    onClick={toggleMenu}
                ></div>
            )}

        </header>
    );
}
