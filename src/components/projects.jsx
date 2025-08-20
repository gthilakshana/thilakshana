import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
    const [showMore, setShowMore] = useState(false);

    const projects = [
        {
            title: "Ahuse",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            image: "/IIC_Logo.png",
            github: "https://github.com/yourusername/ahuse",
        },
        {
            title: "App Dashboard",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            image: "/project2.png",
            github: "https://github.com/yourusername/dashboard",
        },
        {
            title: "Easy Rentn",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            image: "/project3.png",
            github: "https://github.com/yourusername/rentn",
        },
        {
            title: "Portfolio Website",
            description:
                "A modern responsive portfolio website built with React and Tailwind CSS.",
            image: "/project4.png",
            github: "https://github.com/yourusername/portfolio",
        },
        {
            title: "E-commerce Store",
            description:
                "A full-stack e-commerce platform with payment integration and user authentication.",
            image: "/project5.png",
            github: "https://github.com/yourusername/ecommerce",
        },
    ];


    const initialCount = 3;
    const displayedProjects = showMore ? projects : projects.slice(0, initialCount);

    return (
        <section className="bg-gray-100 py-16 px-6 md:px-16 border-b-2 border-gray-200">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-10 max-w-6xl mx-auto">
                <div>
                    <p className="text-sm font-medium text-gray-500">Recent Projects</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-start uppercase">
                        My Projects
                    </h2>
                </div>
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2  text-gray-800font-medium shadow hover:bg-gary-800 transition flex items-center gap-2"
                >
                    <FaGithub /> Visit My GitHub
                </a>

            </div>

            {/* Projects Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {displayedProjects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md hover:shadow-xl transition overflow-hidden"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 mt-2">{project.description}</p>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 flex items-center text-sm font-medium text-gray-900 hover:text-blue-400 transition"
                            >
                                <FaGithub className="mr-2" /> View in GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* See More Button */}
            {projects.length > initialCount && (
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="px-6 py-2 bg-blue-500 text-white font-semibold uppercase shadow hover:bg-blue-600 transition rounded"
                    >
                        {showMore ? "See Less" : "See More"}
                    </button>
                </div>
            )}
        </section>
    );
}
