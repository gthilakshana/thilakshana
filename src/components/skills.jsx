import { FaNodeJs, FaReact, FaJava, FaDatabase, FaFigma, FaLinux, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaAws } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";

export default function Skills() {
    return (
        <section className="bg-blue-50 py-16 px-6 md:px-16">
            <div className="max-w-5xl mx-auto text-center">
                {/* Section Header */}
                <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
                <p className="text-gray-600 mt-2">
                    A blend of technologies I work with to craft modern, scalable, and elegant applications.
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">

                    {/* Backend */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
                        <FaNodeJs className="text-green-500 text-4xl" />
                        <p className="mt-3 text-gray-800 font-medium">Node.js</p>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
                        <SiExpress className="text-gray-700 text-4xl" />
                        <p className="mt-3 text-gray-800 font-medium">Express.js</p>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
                        <FaJava className="text-red-600 text-4xl" />
                        <p className="mt-3 text-gray-800 font-medium">Java</p>
                    </div>

                    {/* Frontend */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
                        <FaReact className="text-blue-500 text-4xl" />
                        <p className="mt-3 text-gray-800 font-medium">React.js</p>
                    </div>

                    {/* Databases */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
                        <SiMongodb className="text-green-600 text-4xl" />
                        <p className="mt-3 text-gray-800 font-medium">MongoDB</p>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
                        <SiMysql className="text-blue-700 text-4xl" />
                        <p className="mt-3 text-gray-800 font-medium">MySQL</p>
                    </div>

                    {/* UI/UX */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
                        <FaFigma className="text-pink-500 text-4xl" />
                        <p className="mt-3 text-gray-800 font-medium">UI/UX, Figma</p>
                    </div>

                    {/* OS */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
                        <FaLinux className="text-yellow-600 text-4xl" />
                        <p className="mt-3 text-gray-800 font-medium">Linux</p>
                    </div>

                    {/* Web Tech */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
                        <FaHtml5 className="text-orange-600 text-4xl" />
                        <p className="mt-3 text-gray-800 font-medium">HTML</p>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
                        <FaCss3Alt className="text-blue-600 text-4xl" />
                        <p className="mt-3 text-gray-800 font-medium">CSS</p>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
                        <FaBootstrap className="text-purple-600 text-4xl" />
                        <p className="mt-3 text-gray-800 font-medium">Bootstrap</p>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
                        <SiTailwindcss className="text-teal-500 text-4xl" />
                        <p className="mt-3 text-gray-800 font-medium">Tailwind CSS</p>
                    </div>

                    {/* Tools */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
                        <FaGitAlt className="text-red-500 text-4xl" />
                        <p className="mt-3 text-gray-800 font-medium">Git, GitHub</p>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
                        <FaAws className="text-orange-500 text-4xl" />
                        <p className="mt-3 text-gray-800 font-medium">AWS</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
