import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                {/* Left Side */}
                <p className="text-sm">
                    © {new Date().getFullYear()} Gavrawa Thilakshana. All rights reserved.
                </p>

                {/* Right Side - Social Icons */}
                <div className="flex space-x-6 mt-4 md:mt-0 text-xl">
                    <a
                        href="https://github.com/gthilakshana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:gavrawavanniarachchi@gmail.com"
                        className="hover:text-white transition"
                    >
                        <FaEnvelope />
                    </a>
                    {/* <a
                        href="https://facebook.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        <FaFacebook />
                    </a> */}
                    <a
                        href="https://instagram.com/gavrawa_thilakshana_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
}
