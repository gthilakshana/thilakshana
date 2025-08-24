import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FiSearch, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { ChevronDown, ChevronUp } from "lucide-react"

export default function Resume() {
    const [showMore, setShowMore] = useState(false);
    const [zoomed, setZoomed] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const certifications = [
        // { title: "C++ ", org: "LSEG", year: "2025", link: "", img: "" },
        { title: "CS50's Introduction to Database with SQL", org: "Harvard University", year: "2025", link: "https://certificates.cs50.io/b6832460-efea-41e4-ac1e-950300e93c1c.pdf?size=letter", img: "CS50_SQL.png" },
        { title: "CS50's Introduction to Programming with Python", org: "Harvard University", year: "2025", link: "https://certificates.cs50.io/3dbc26fe-3967-4c39-902e-52639810aa77.pdf?size=letter", img: "CS50_Python.png" },
        { title: "AWSome Day Online Conference", org: "Amazon Web Services (AWS)", year: "2023", link: "", img: "aws.jpg" },
        { title: "Java Programming", org: "Evotech Education", year: "2021", link: "", img: "java_evo.jpg" },
        { title: "Photoshop Basics to Advanced", org: "Kelani External Degree Institute", year: "2021", link: "", img: "photoshop.jpg" },

    ];

    const education = [
        { title: "BEng. In Software Engineering (Hons)", org: "IIC University of Technology, Cambodia", year: "2021 – 2025", img: "/IIC_Logo.png" },
        { title: "RQF Level 5 Professional Diploma in Software Engineering", org: "SEG Awards, UK", year: "2022 – 2023", img: "/Seg_awards.png" },
        { title: "RQF Level 4 Professional Diploma in Software Engineering", org: "SEG Awards, UK", year: "2021 – 2022", img: "/Seg_awards.png" },
        { title: "Thihagoda National School Matara", org: "Advanced Level", year: "2017 – 2020", img: "/school.jpg" },
    ];

    const zoomImages = certifications.map(cert => cert.img);



    return (
        <section id="resume" className="bg-gray-50 py-20 px-6 md:px-16 border-b-2 border-gray-200">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-start uppercase">
                    Resume
                </h2>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Education */}
                    <div className="lg:w-1/2">
                        <h3 className="text-2xl font-semibold text-yellow-500 flex items-center gap-2 mb-6 uppercase">
                            <FaGraduationCap className="text-yellow-500" /> Education
                        </h3>

                        <div className="space-y-8">
                            {education.map((edu, i) => (
                                <div key={i} className="flex justify-between items-center border-b pb-4 ">
                                    <div className="flex items-center gap-4">
                                        <img src={edu.img} alt={edu.title} className="w-12 h-12 object-contain rounded" />
                                        <div>
                                            <div className="flex items-center gap-2 w-[210px] lg:w-[400px]">
                                                <h4 className="sm:text-md lg:text-lg font-semibold text-gray-800">{edu.title}</h4>
                                            </div>
                                            <p className="text-[14px] lg:text-[16px] text-gray-600">{edu.org}</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-semibold lg:text-[12px] text-gray-400 ">{edu.year}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="lg:w-1/2">
                        <h3 className="text-2xl font-semibold text-yellow-500 flex items-center gap-2 mb-6 uppercase">
                            Certifications
                        </h3>

                        <div className="space-y-4">
                            {(showMore ? certifications : certifications.slice(0, 2)).map((cert, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between items-center bg-gray-100 p-4 shadow hover:shadow-lg transition hover:bg-gray-50 group"
                                >

                                    <div
                                        className="relative cursor-pointer"
                                        onClick={() => {
                                            setCurrentIndex(zoomImages.indexOf(cert.img));
                                            setZoomed(true);
                                        }}
                                    >
                                        <img src={cert.img} alt={cert.title} className="w-12 h-12 object-contain rounded border-2 border-gray-300" />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition duration-300">
                                            <FiSearch className="text-gary-600 text-xl opacity-0 group-hover:opacity-100 transition duration-300" />
                                        </div>
                                    </div>


                                    <div className="ml-4 flex-1">
                                        <h4 className="sm:text-md lg:text-lg  font-semibold text-gray-800">
                                            {cert.title}
                                        </h4>

                                        <div className="text-[14px] lg:text-[16px] flex items-center gap-2 text-gray-600">
                                            <span>{cert.org}</span>
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[14px] lg:text-[16px] text-yellow-600 hover:underline transition "
                                            >
                                                View
                                            </a>
                                        </div>
                                    </div>

                                    <span className="text-gray-500 text-[13px]">{cert.year}</span>
                                </div>
                            ))}

                        </div>

                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="p-3 rounded-full bg-gray-200 text-gray-800 cursor-pointer shadow hover:bg-gray-800 hover:text-white transition"
                            >
                                {showMore ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Zoom Modal */}
            {zoomed && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                    onClick={() => setZoomed(false)}
                >
                    <div className="relative max-w-3xl w-full">
                        <img
                            src={zoomImages[currentIndex]}
                            alt="Zoomed"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <button
                            className="absolute top-2 right-2 text-black text-3xl cursor-pointer"
                            onClick={() => setZoomed(false)}
                        >
                            <FiX />
                        </button>

                    </div>
                </div>
            )}
        </section>
    );
}
