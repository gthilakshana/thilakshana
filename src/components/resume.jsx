import { useState } from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

export default function Resume() {
    const [showMore, setShowMore] = useState(false);

    return (
        <section id="resume" className="bg-gray-50 py-20 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-start uppercase">
                    Resume
                </h2>

                {/* Education */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold text-blue-600 flex items-center gap-2 mb-6">
                        <FaGraduationCap className="text-blue-500" /> Education
                    </h3>

                    <div className="space-y-8">
                        <div className="flex justify-between items-start border-b pb-4">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">
                                    BEng. In Software Engineering (Hons)
                                </h4>
                                <p className="text-gray-600">
                                    IIC University of Technology, Cambodia
                                </p>
                            </div>
                            <span className="text-gray-500">OCT 2021 – MAR 2025</span>
                        </div>

                        <div className="flex justify-between items-start border-b pb-4">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">
                                    RQF Level 5 Professional Diploma in Software Engineering
                                </h4>
                                <p className="text-gray-600">SEG Awards, UK</p>
                            </div>
                            <span className="text-gray-500">OCT 2022 – MAR 2023</span>
                        </div>

                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">
                                    RQF Level 4 Professional Diploma in Software Engineering
                                </h4>
                                <p className="text-gray-600">SEG Awards, UK</p>
                            </div>
                            <span className="text-gray-500">OCT 2021 – MAR 2022</span>
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <h3 className="text-2xl font-semibold text-blue-600 flex items-center gap-2 mb-6">
                        <FaCertificate className="text-blue-500" /> Certifications
                    </h3>

                    <div className="space-y-6">
                        <div className="flex justify-between items-start border-b pb-4">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">
                                    AWS Cloud Practitioner
                                </h4>
                                <p className="text-gray-600">Amazon Web Services</p>
                            </div>
                            <span className="text-gray-500">2023</span>
                        </div>

                        <div className="flex justify-between items-start border-b pb-4">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">
                                    Responsive Web Design
                                </h4>
                                <p className="text-gray-600">FreeCodeCamp</p>
                            </div>
                            <span className="text-gray-500">2022</span>
                        </div>

                        {/* See More Certifications */}
                        {showMore && (
                            <>
                                <div className="flex justify-between items-start border-b pb-4">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            JavaScript Algorithms & Data Structures
                                        </h4>
                                        <p className="text-gray-600">FreeCodeCamp</p>
                                    </div>
                                    <span className="text-gray-500">2022</span>
                                </div>

                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            UI/UX Design Fundamentals
                                        </h4>
                                        <p className="text-gray-600">Coursera</p>
                                    </div>
                                    <span className="text-gray-500">2021</span>
                                </div>
                            </>
                        )}

                        {/* Toggle Button */}
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                        >
                            {showMore ? "See Less" : "See More"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
