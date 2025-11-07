import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../components/data/projectsData.js";
import GitHubContributions from "./gitHubContributions.jsx";

export default function Projects() {
    const [showMore, setShowMore] = useState(false);
    const initialCount = 3;
    const displayedProjects = showMore ? projects : projects.slice(0, initialCount);

    const text =
        "A selection of my recent development work, including full-stack apps, UI/UX projects, and experimental builds.";

    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const speed = isDeleting ? 30 : 50;

        const typingEffect = setTimeout(() => {
            if (!isDeleting && index < text.length) {
                setDisplayedText(text.substring(0, index + 1));
                setIndex(index + 1);
            } else if (isDeleting && index > 0) {
                setDisplayedText(text.substring(0, index - 1));
                setIndex(index - 1);
            } else if (index === text.length) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (index === 0 && isDeleting) {
                setIsDeleting(false);
            }
        }, speed);

        return () => clearTimeout(typingEffect);
    }, [index, isDeleting]);

    return (
        <section
            id="projects"
            className="bg-gradient-to-b from-gray-50 to-white text-gray-900 py-20 px-6 md:px-16 font-inter border-b border-gray-200"
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-start md:items-center 
                justify-between mb-16 max-w-6xl mx-auto gap-4 md:gap-0"
            >
                <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        Recent Projects
                    </p>

                    <h2 className="text-3xl md:text-4xl font-extrabold flex items-center gap-3 animate-yellow-glow">
                        Featured Work
                    </h2>


                    <div className="flex items-start gap-2">



                        <p className="text-gray-600 text-sm max-w-lg loop-type">
                            {displayedText}
                        </p>
                    </div>


                </div>


            </motion.div>

            {/* Project Cards */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {displayedProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>

            {/* Show More Button */}
            {projects.length > initialCount && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12 flex justify-center"
                >
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="flex items-center justify-center gap-2 
                        px-7 py-3 rounded-full bg-gray-900 text-white font-semibold
                        shadow-lg hover:bg-yellow-600 hover:text-white 
                        hover:shadow-xl transition-all duration-300"
                    >
                        {showMore ? (
                            <>
                                <ChevronUp size={20} />
                                Show Less
                            </>
                        ) : (
                            <>
                                <ChevronDown size={20} />
                                Show More
                            </>
                        )}
                    </button>
                </motion.div>
            )}

            {/* GitHub Contributions Section */}
            <div className="mt-10">
                <GitHubContributions />
            </div>



        </section>
    );
}
