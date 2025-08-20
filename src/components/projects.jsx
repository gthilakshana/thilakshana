import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Projects() {
    const [showMore, setShowMore] = useState(false);

    const projects = [
        {
            title: "Mahee Fashion Store",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            image: "/project/mahee_store.png",
            github: "https://github.com/gthilakshana/frontend_cbc",
            demo: "https://frontend-cbc.vercel.app/",
        },
        {
            title: "Cosmatic Backend",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            image: "/project/Node_api.png",
            github: "https://github.com/gthilakshana/cosmatic_backend",
        },
        {
            title: "React Register Page",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            image: "/project/react_signup.png",
            github: "https://github.com/gthilakshana/react-register_p",
            demo: "https://react-register-p.vercel.app/",
        },
        {
            title: "Google style search bar",
            description:
                "A simple Google-style search bar built using HTML & CSS. This project is part of CS50 Problem Set 0 and serves as a beginner-friendly exercise in web development.",
            image: "/project/google_img1.png",
            github: "https://github.com/gthilakshana/google-search-bar",
        },
        {
            title: "Customer Management Crud (Node.Js)",
            description:
                "Customer Management CRUD (Node.js & Handlebars) – A web application for managing customer records with Create, Read, Update, and Delete operations. Built using Node.js, Express, MySQL, and Handlebars for dynamic UI rendering with structured routes, controllers, and database integration.",
            image: "/project/Crud_Node.png",
            github: "https://github.com/gthilakshana/CustomerApp-Node",
        },
    ];


    const initialCount = 3;
    const displayedProjects = showMore ? projects : projects.slice(0, initialCount);

    return (
        <section id="projects" className="bg-gray-50 py-16 px-6 md:px-16 border-b-2 border-gray-200">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-10 max-w-6xl mx-auto">
                <div>
                    <p className="text-sm font-medium text-gray-500">Recent Projects</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-start uppercase">
                        Projects
                    </h2>
                </div>
                <a
                    href="https://github.com/gthilakshana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-lg bg-gray-200 text-gray-900 font-medium shadow-md 
             hover:bg-gray-300 hover:scale-105 active:scale-95
             transition-transform duration-300 ease-in-out flex items-center gap-2"
                >
                    <FaGithub className="text-lg" />
                    GitHub
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
                            className="w-full h-56 object-cover shadow-md transition p-2"
                        />

                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                            <p className="text-gray-600 mt-2">{project.description}</p>

                            <div className="mt-4 flex items-center gap-4">
                                {/* GitHub Icon */}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-sm font-medium text-gray-900 hover:text-blue-600 transition"
                                >
                                    <FaGithub className="mr-2" /> GitHub
                                </a>


                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-sm font-medium text-gray-900 hover:text-red-500 transition cursor-pointer"
                                >
                                    <FiExternalLink className="mr-2" /> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {/* See More Button */}
            {projects.length > initialCount && (
                <div className="mt-6 flex justify-end">
                    <span
                        onClick={() => setShowMore(!showMore)}
                        className="p-3 rounded-full bg-gray-200 text-gray-800 cursor-pointer shadow hover:bg-gray-800 hover:text-white transition"
                    >
                        {showMore ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </span>
                </div>
            )}
        </section>
    );
}
