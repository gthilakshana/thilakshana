import { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 backdrop-blur-md shadow-md border-b-2 border-gray-700">
            <div className="w-full mx-auto flex items-center justify-between px-6 md:px-8 py-4">
                {/* Logo */}

                <div className="inline-block rounded-md  ">
                    <img
                        src="logo.png"
                        alt="Thilakshana Logo"
                        className="h-10 sm:h-12 md:h-12 w-[140px] sm:w-[150px] md:w-[220px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    />
                </div>




                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-base uppercase items-center justify-end font-medium w-[80%] ">
                    {["home", "about", "resume", "projects", "skills", "contact"].map((section) => (
                        <span
                            key={section}
                            className="cursor-pointer text-white hover:text-blue-500 transition-colors"
                            onClick={() => handleScroll(section)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </span>
                    ))}
                    <span
                        className="p-3 text-white text-2xl hover:text-yellow-500 transition-colors cursor-pointer "
                        onClick={() => handleScroll("contact")}
                    >
                        <FaUser className="text-xl " />
                    </span>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 w-full px-6 pb-6 space-y-4 text-center text-white uppercase font-medium">
                    {["home", "about", "resume", "projects", "skills", "contact"].map((section) => (
                        <span
                            key={section}
                            className="block py-2 cursor-pointer hover:text-blue-500 transition-colors"
                            onClick={() => handleScroll(section)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </span>
                    ))}
                    <span
                        className="block py-2 px-5 bg-red-500 rounded shadow-md hover:bg-red-600 transition mx-auto w-max cursor-pointer"
                        onClick={() => handleScroll("contact")}
                    >
                        Sign In
                    </span>
                </div>
            )}
        </header>
    );
}
