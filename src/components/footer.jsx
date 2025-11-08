import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaInstagram,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-5 border-t mb-16 lg:mb-0  border-gray-800">
            <div className="max-w-6xl mx-auto py-5 lg:py-8  flex flex-col items-center space-y-6">

                {/* Social Icons */}
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/gthilakshana"
                        target="_blank"
                        className="text-gray-300 hover:text-yellow-400 text-2xl transition duration-300 hover:scale-110"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/in/gavrawa-thilakshana"
                        target="_blank"
                        className="text-gray-300 hover:text-yellow-400 text-2xl transition duration-300 hover:scale-110"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="gavrawavanniarachchi@gmail.com"
                        className="text-gray-300 hover:text-yellow-400 text-2xl transition duration-300 hover:scale-110"
                    >
                        <FaEnvelope />
                    </a>


                </div>

                {/* Divider Line */}
                <div className="w-full border-t border-gray-800"></div>

                {/* Copyright */}
                <p className="text-xs text-gray-400 text-center">
                    © {new Date().getFullYear()}{" "}
                    <span className="font-semibold text-gray-100 hover:text-yellow-400 transition">
                        Gavrawa Thilakshana
                    </span>{" "}
                    — All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
