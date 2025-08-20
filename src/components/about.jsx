import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

export default function About() {
    return (
        <section id="about" className="bg-white py-16 px-6 md:px-16 border-b-2 border-gray-200">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Side - Image */}
                <div className="flex justify-center items-center">
                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        className="w-40 sm:w-60 md:w-80 rounded-lg object-cover p-2 shadow-lg border-4 border-blue-100 hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Right Side - Text */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase text-gray-900 mb-4">
                        About Me
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Hi, I’m <span className="font-semibold text-blue-500">Thilakshana</span>,
                        a passionate <span className="font-semibold">Full Stack Developer</span>
                        with experience in building modern, responsive, and user-friendly web applications.
                        I enjoy turning complex problems into elegant solutions using the latest web technologies.
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        With expertise in <span className="text-blue-500">React, Node.js, MongoDB</span>,
                        and cloud technologies like <span className="text-blue-500">AWS</span>,
                        I strive to create seamless digital experiences.
                        I also love exploring <span className="text-blue-500">UI/UX design</span>
                        to ensure my projects are both functional and visually appealing.
                    </p>

                    {/* Animated Button */}
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 uppercase 
                        bg-blue-500 text-white font-medium shadow-md
                        hover:bg-blue-600 hover:scale-105 active:scale-95
                        transition-transform duration-300 ease-in-out"
                    >
                        <FaDownload className="animate-bounce text-lg" />
                        Resume
                    </Link>
                </div>
            </div>
        </section>
    );
}
