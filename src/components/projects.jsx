import { useState } from "react";
import { FaCode, FaGithub } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../components/data/projectsData.js";

export default function Projects() {
    const [showMore, setShowMore] = useState(false);
    const initialCount = 3;
    const displayedProjects = showMore ? projects : projects.slice(0, initialCount);

    return (
        <section id="projects" className="bg-gray-50 py-16 px-6 md:px-16 border-b-2 border-gray-200">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 max-w-6xl mx-auto gap-4 md:gap-0">
                <div>
                    <p className="text-xs md:text-sm font-medium text-gray-500">Recent Projects</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-12 uppercase flex items-center gap-2 sm:gap-3">
                        <FaCode className="text-gray-600 text-base sm:text-lg" />
                        Projects
                    </h2>
                </div>
                <a
                    href="https://github.com/gthilakshana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-lg bg-gray-200 text-gray-900 font-medium shadow-md hover:bg-gray-300 hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                >
                    <FaGithub className="text-sm sm:text-lg" />
                    GitHub
                    <FaArrowRight className="text-xs sm:text-sm" />
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
