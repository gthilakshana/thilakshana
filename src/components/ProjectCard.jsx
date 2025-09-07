// ProjectCard.jsx
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";

export default function ProjectCard({ project }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="bg-gray-50 shadow-md hover:shadow-xl transition overflow-hidden ">
            {project.video ? (
                <video
                    src={project.video}
                    className="w-full h-56 object-cover shadow-md transition p-2"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            ) : (
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover shadow-md transition p-2"
                />
            )}

            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                </h3>


                <p className="text-gray-600 mt-2">
                    {expanded
                        ? project.description
                        : project.description.slice(0, 100) + "..."}
                </p>


                {project.description.length > 100 && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-yellow-500 hover:text-yellow-600 font-medium text-sm mt-2"
                    >
                        {expanded ? "See Less" : "See More"}
                    </button>
                )}

                <div className="mt-4 flex items-center gap-4">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm font-medium text-gray-900 hover:text-yellow-500 transition"
                        >
                            <FaGithub className="mr-2" /> GitHub
                        </a>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm font-medium text-gray-900 hover:text-red-500 transition cursor-pointer"
                        >
                            <FiExternalLink className="mr-2" /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
