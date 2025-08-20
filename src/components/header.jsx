import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 backdrop-blur-md shadow-md border-b-2 border-gray-700">
            <div className="w-full mx-auto flex items-center justify-between px-8 py-4 ">
                {/* Logo */}
                <div className="w-[20%] flex items-center justify-center">
                    <Link to="/">
                        <span className="text-2xl font-bold text-blue-500 uppercase ">G_Thilakshana</span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="w-[80%] hidden md:flex space-x-8 text-base uppercase items-center justify-end font-medium">
                    <Link
                        to="/home"
                        className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors"
                    >
                        About
                    </Link>

                    <Link
                        to="/resume"
                        id="resume"
                        className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors"
                    >
                        Resume
                    </Link>

                    <Link
                        to="/about"
                        className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors"
                    >
                        Projects
                    </Link>

                    <Link
                        to="/skills"
                        className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors"
                    >
                        Skills
                    </Link>

                    <Link
                        to="/contact"
                        className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors"
                    >
                        Contact
                    </Link>

                    <Link
                        to="/contact"
                        className="flex items-center gap-2 px-5 py-2 rounded-[5px]  bg-blue-500 text-white font-medium shadow-md hover:bg-blue-600 transition"
                    >
                        <FaDownload className="animate-bounce text-lg" /> Resume
                    </Link>
                </nav>
            </div>
        </header>
    );
}
