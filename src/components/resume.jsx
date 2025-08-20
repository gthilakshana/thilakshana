import { useState } from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

export default function Resume() {
    const [showMore, setShowMore] = useState(false);

    const certifications = [
        { title: "AWS Cloud Practitioner", org: "Amazon Web Services", year: "2023", link: "https://aws.amazon.com/certification/", img: "/logoP.png" },
        { title: "Responsive Web Design", org: "FreeCodeCamp", year: "2022", link: "https://www.freecodecamp.org/certification/", img: "/images/freecodecamp.png" },
        { title: "JavaScript Algorithms & Data Structures", org: "FreeCodeCamp", year: "2022", link: "https://www.freecodecamp.org/certification/", img: "/images/freecodecamp.png" },
        { title: "UI/UX Design Fundamentals", org: "Coursera", year: "2021", link: "https://www.coursera.org/certificates/", img: "/images/coursera.png" },
        { title: "Front-End Web Development", org: "Coursera", year: "2021", link: "https://www.coursera.org/certificates/", img: "/images/coursera.png" },
        { title: "Back-End Web Development", org: "Coursera", year: "2021", link: "https://www.coursera.org/certificates/", img: "/images/coursera.png" },
        { title: "Python for Everybody", org: "Coursera", year: "2021", link: "https://www.coursera.org/certificates/", img: "/images/coursera.png" },
    ];

    const education = [
        { title: "BEng. In Software Engineering (Hons)", org: "IIC University of Technology, Cambodia", year: "OCT 2021 – MAR 2025", img: "/IIC_Logo.png" },
        { title: "RQF Level 5 Professional Diploma in Software Engineering", org: "SEG Awards, UK", year: "OCT 2022 – MAR 2023", img: "/Seg_awards.png" },
        { title: "RQF Level 4 Professional Diploma in Software Engineering", org: "SEG Awards, UK", year: "OCT 2021 – MAR 2022", img: "/Seg_awards.png" },
        { title: "Thihagoda National School Matara", org: "Advanced Level", year: "2017 – 2020", img: "/school.jpg" },
    ];

    return (
        <section id="resume" className="bg-gray-50 py-20 px-6 md:px-16  ">
            <div className="max-w-6xl mx-auto ">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-start uppercase">
                    Resume
                </h2>

                <div className="flex flex-col lg:flex-row gap-12">


                    {/* Education - Right */}
                    <div className="lg:w-1/2">
                        <h3 className="text-2xl font-semibold text-blue-600 flex items-center gap-2 mb-6 uppercase">
                            <FaGraduationCap className="text-blue-500" /> Education
                        </h3>

                        <div className="space-y-8">
                            {education.map((edu, i) => (
                                <div key={i} className="flex justify-between items-center border-b pb-4">
                                    <div className="flex items-center gap-4">
                                        <img src={edu.img} alt={edu.title} className="w-12 h-12 object-contain rounded" />
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900">{edu.title}</h4>
                                            <p className="text-gray-600">{edu.org}</p>
                                        </div>
                                    </div>
                                    <span className="text-gray-500 text-[12px]">{edu.year}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications - Left */}
                    <div className="lg:w-1/2">
                        <h3 className="text-2xl font-semibold text-blue-600 flex items-center gap-2 mb-6 uppercase">
                            Certifications
                        </h3>

                        <div className="space-y-4">
                            {certifications.slice(0, 2).map((cert, i) => (
                                <a
                                    key={i}
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-between items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition hover:bg-gray-50"
                                >
                                    <div className="flex items-center gap-4">
                                        <img src={cert.img} alt={cert.title} className="w-12 h-12 object-contain rounded" />
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900">{cert.title}</h4>
                                            <p className="text-gray-600">{cert.org}</p>
                                        </div>
                                    </div>
                                    <span className="text-gray-500 ">{cert.year}</span>
                                </a>
                            ))}

                            {showMore &&
                                certifications.slice(2).map((cert, i) => (
                                    <a
                                        key={i}
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex justify-between items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition hover:bg-gray-50"
                                    >
                                        <div className="flex items-center gap-4">
                                            <img src={cert.img} alt={cert.title} className="w-12 h-12 object-contain rounded" />
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900">{cert.title}</h4>
                                                <p className="text-gray-600">{cert.org}</p>
                                            </div>
                                        </div>
                                        <span className="text-gray-500">{cert.year}</span>
                                    </a>
                                ))}
                        </div>

                        <div className="mt-6 flex justify-start">
                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="px-6 py-2 bg-blue-500 text-white font-semibold uppercase shadow hover:bg-blue-600 transition rounded"
                            >
                                {showMore ? "See Less" : "See More"}
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
