import { useState } from "react";
import { FaCode, FaGithub } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import ProjectCard from "./projectCard";
import { projects } from "../components/data/projectsData.js";

export default function Projects() {
    const [showMore, setShowMore] = useState(false);
    const initialCount = 3;
    const displayedProjects = showMore ? projects : projects.slice(0, initialCount);

    return (
        <section id="projects" className="bg-gray-50 py-16 px-6 md:px-16 border-b-2 border-gray-200">
            <div className="flex items-center justify-between mb-10 max-w-6xl mx-auto">
                <div>
                    <p className="text-sm font-medium text-gray-500">Recent Projects</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-start uppercase flex items-center gap-3">
                        <FaCode className="text-gray-600" />
                        Projects
                    </h2>
                </div>
                <a
                    href="https://github.com/gthilakshana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-lg bg-gray-200 text-gray-900 font-medium shadow-md hover:bg-gray-300 hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out flex items-center gap-2"
                >
                    <FaGithub className="text-lg" />
                    GitHub
                    <FaArrowRight className="text-sm" />
                </a>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {displayedProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

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
