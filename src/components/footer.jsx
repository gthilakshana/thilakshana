import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaInstagram,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-50 via-white to-gray-50 text-gray-700 border-t border-gray-200 py-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">





                {/* Right Side - Social Icons */}
                <div className="flex space-x-4">
                    <a
                        href="https://github.com/gthilakshana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200 text-gray-600 hover:text-yellow-500 hover:shadow-md transition-all duration-300"
                    >
                        <FaGithub size={18} />
                    </a>

                    <a
                        href="https://linkedin.com/in/gavrawa-thilakshana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200 text-gray-600 hover:text-yellow-500 hover:shadow-md transition-all duration-300"
                    >
                        <FaLinkedin size={18} />
                    </a>

                    <a
                        href="mailto:gavrawavanniarachchi@gmail.com"
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200 text-gray-600 hover:text-yellow-500 hover:shadow-md transition-all duration-300"
                    >
                        <FaEnvelope size={18} />
                    </a>

                    <a
                        href="https://instagram.com/gavrawa_thilakshana_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200 text-gray-600 hover:text-yellow-500 hover:shadow-md transition-all duration-300"
                    >
                        <FaInstagram size={18} />
                    </a>
                </div>




                {/* Left Side - Copyright */}
                <p className="text-xs text-gray-500 text-center md:text-left">
                    © {new Date().getFullYear()}{" "}
                    <span className="font-semibold text-gray-800 hover:text-yellow-500">
                        Gavrawa Thilakshana
                    </span>{" "}
                    — All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
