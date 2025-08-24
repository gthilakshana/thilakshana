import { FaNodeJs, FaJava, FaReact, FaFigma, FaLinux, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaAws, FaPython, FaCuttlefish } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiPostman, SiDocker, SiJenkins, SiUbuntu, SiCentos } from "react-icons/si";

export default function Skills() {
    const skills = [
        { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500", bg: "bg-green-100" },
        { icon: <SiExpress />, name: "Express.js", color: "text-gray-700", bg: "bg-gray-200" },
        { icon: <FaJava />, name: "Java", color: "text-red-600", bg: "bg-red-100" },
        { icon: <FaCuttlefish />, name: "C++", color: "text-indigo-600", bg: "bg-indigo-100" },
        { icon: <FaPython />, name: "Python", color: "text-yellow-500", bg: "bg-yellow-100" },
        { icon: <FaReact />, name: "React.js", color: "text-blue-500", bg: "bg-blue-100" },
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-600", bg: "bg-green-100" },
        { icon: <SiMysql />, name: "MySQL", color: "text-blue-700", bg: "bg-blue-100" },
        { icon: <FaFigma />, name: "UI/UX, Figma", color: "text-pink-500", bg: "bg-pink-100" },
        { icon: <FaLinux />, name: "Linux", color: "text-gray-900", bg: "bg-gray-100" },
        { icon: <SiUbuntu />, name: "Ubuntu", color: "text-orange-500", bg: "bg-orange-100" },
        { icon: <SiCentos />, name: "CentOS", color: "text-purple-700", bg: "bg-purple-100" },
        { icon: <FaHtml5 />, name: "HTML", color: "text-orange-600", bg: "bg-orange-100" },
        { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-600", bg: "bg-blue-100" },
        { icon: <FaBootstrap />, name: "Bootstrap", color: "text-purple-600", bg: "bg-purple-100" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-teal-500", bg: "bg-teal-100" },
        { icon: <FaGitAlt />, name: "Git, GitHub", color: "text-red-500", bg: "bg-red-100" },
        { icon: <FaAws />, name: "AWS", color: "text-orange-500", bg: "bg-orange-100" },
        { icon: <SiPostman />, name: "Postman", color: "text-orange-600", bg: "bg-orange-100" },
        { icon: <SiDocker />, name: "Docker", color: "text-blue-500", bg: "bg-blue-100" },
        { icon: <SiJenkins />, name: "Jenkins", color: "text-red-700", bg: "bg-red-100" },


    ];

    return (
        <section id="skills" className="bg-gray-100 py-16 px-6 md:px-16 border-b-2 border-gray-200">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-start uppercase">
                    Skills
                </h2>
                <p className="text-gray-600 text-start mb-10">
                    A blend of technologies I work with to craft modern, scalable, and elegant applications.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="cursor-pointer flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300"
                        >
                            <div className={`w-16 h-16 flex items-center justify-center rounded-full ${skill.bg} mb-3`}>
                                <span className={`text-3xl ${skill.color}`}>{skill.icon}</span>
                            </div>
                            <p className="mt-2 text-gray-800 font-semibold text-center">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
