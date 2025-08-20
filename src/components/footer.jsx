import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                {/* Left Side */}
                <p className="text-sm">
                    © {new Date().getFullYear()} Gavrawa Thilakshana. All rights reserved.
                </p>

                {/* Right Side - Social Icons */}
                <div className="flex space-x-6 mt-4 md:mt-0 text-xl">
                    <a
                        href="https://github.com/yourusername"
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
                        href="mailto:your@email.com"
                        className="hover:text-white transition"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    );
}
