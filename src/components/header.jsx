import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md shadow-md">
            <div className="w-full mx-auto flex items-center justify-between px-8 py-4 border-b border-gray-200">
                {/* Logo */}
                <div className="w-[20%] flex items-center justify-center">
                    <Link to="/">
                        <img src="/por.jpg" alt="" className="object-cover w-[120px]" />
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="w-[80%] hidden md:flex space-x-8 text-base uppercase items-center justify-end font-medium">
                    <Link
                        to="/home"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
                    >
                        About
                    </Link>

                    <Link
                        to="/resume"
                        id="resume"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
                    >
                        Resume
                    </Link>

                    <Link
                        to="/about"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
                    >
                        Projects
                    </Link>

                    <Link
                        to="/skills"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
                    >
                        Skills
                    </Link>

                    <Link
                        to="/contact"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
                    >
                        Contact
                    </Link>

                    <Link
                        to="/contact"
                        className="flex items-center gap-2 px-5 py-2  bg-gray-900 text-white font-medium shadow-md hover:bg-gray-900 transition"
                    >
                        <FaDownload /> Resume
                    </Link>
                </nav>
            </div>
        </header>
    );
}
