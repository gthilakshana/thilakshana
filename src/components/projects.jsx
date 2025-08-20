import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Projects() {
    const projects = [
        {
            title: "Ahuse",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            image: "/project1.png",
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
    ];

    return (
        <section className="bg-gray-50 py-16 px-6 md:px-16">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-10">
                <div>
                    <p className="text-sm font-medium text-gray-500">Recent Projects</p>
                    <h2 className="text-3xl font-bold text-gray-900">My Portfolio</h2>
                </div>
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-pink-600 text-white rounded-lg font-medium shadow hover:bg-pink-700 transition"
                >
                    Visit My GitHub
                </a>
            </div>

            {/* Projects Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
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
                                className="mt-4 flex items-center text-sm font-medium text-gray-900 hover:text-pink-600 transition"
                            >
                                <FaGithub className="mr-2" /> View in GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* See More Button */}
            <div className="flex justify-center mt-12">
                <Link
                    to="/portfolio"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition"
                >
                    See More Projects
                </Link>
            </div>
        </section>
    );
}
