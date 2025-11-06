import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Search, X, ChevronDown, ChevronUp } from "lucide-react";
import { MdOutlineBookmarkAdded } from "react-icons/md";


export default function Resume() {
    const [showMore, setShowMore] = useState(false);
    const [zoomed, setZoomed] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fullText = "Resume";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    const experiences = [
        {
            role: "Full Stack Developer Intern",
            company: "Make It Viral Media & Tech Pvt Ltd",
            period: "2025 – Present",
            desc: "Contributing to scalable full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js. Focused on crafting responsive UI/UX interfaces, enhancing user engagement, and optimizing backend APIs for performance and reliability.",
        },
        {
            role: "React Developer & UI/UX Designer",
            company: "Freelance / Personal Projects",
            period: "2024 – 2025",
            desc: "Designed and developed responsive web applications using React, Next.js, and Tailwind CSS, with strong focus on user-centered UI/UX design. Integrated RESTful APIs built with Node.js, Express, and MongoDB for complete full-stack solutions.",
        },
    ];

    const education = [
        {
            title: "BEng. In Software Engineering (Hons)",
            org: "IIC University of Technology, Cambodia",
            year: "2021 – 2025",
            img: "/IIC_Logo.png",
        },
        {
            title: "RQF Level 5 Professional Diploma in Software Engineering",
            org: "SEG Awards, UK",
            year: "2022 – 2023",
            img: "/Seg_awards.png",
        },
        {
            title: "RQF Level 4 Professional Diploma in Software Engineering",
            org: "SEG Awards, UK",
            year: "2021 – 2022",
            img: "/Seg_awards.png",
        },
        {
            title: "Thihagoda National School Matara",
            org: "Advanced Level",
            year: "2017 – 2020",
            img: "/school.jpg",
        },
    ];

    const certifications = [
        {
            title: "CS50's Introduction to Database with SQL",
            org: "Harvard University",
            year: "2025",
            link: "https://certificates.cs50.io/b6832460-efea-41e4-ac1e-950300e93c1c.pdf?size=letter",
            img: "CS50_SQL.png",
        },
        {
            title: "CS50's Introduction to Programming with Python",
            org: "Harvard University",
            year: "2025",
            link: "https://certificates.cs50.io/3dbc26fe-3967-4c39-902e-52639810aa77.pdf?size=letter",
            img: "CS50_Python.png",
        },
        {
            title: "AWSome Day Online Conference",
            org: "Amazon Web Services (AWS)",
            year: "2023",
            img: "aws.jpg",
        },
        {
            title: "Java Programming",
            org: "Evotech Education",
            year: "2021",
            img: "java_evo.jpg",
        },
        {
            title: "Photoshop Basics to Advanced",
            org: "Kelani External Degree Institute",
            year: "2021",
            img: "photoshop.jpg",
        },
    ];

    const zoomImages = certifications.map((c) => c.img);


    useEffect(() => {
        const interval = setInterval(() => {
            if (!deleting) {
                // Typing letters
                setDisplayedText(fullText.slice(0, index + 1));
                setIndex(index + 1);
                if (index + 1 === fullText.length) {
                    setDeleting(true);
                }
            } else {

                setDisplayedText(fullText.slice(0, index - 1));
                setIndex(index - 1);
                if (index - 1 === 0) {
                    setDeleting(false);
                }
            }
        }, 150);

        return () => clearInterval(interval);
    }, [index, deleting]);


    return (
        <section
            id="resume"
            className="bg-gray-50 to-white text-gray-900 py-20 px-6 md:px-16 font-inter border-b border-gray-200"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10 text-center uppercase text-gray-800">
                    {displayedText}
                    <span className="animate-blink">|</span>
                    <style jsx>{`
        .animate-blink {
          display: inline-block;
          width: 1ch;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
                </h2>


                {/* Experience */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-semibold text-yellow-600 flex items-center gap-3 mb-10 uppercase">
                        <Briefcase className="text-yellow-600 w-7 h-7" /> Experience
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-lg md:text-xl font-bold text-gray-800">{exp.role}</h4>
                                <p className="text-yellow-600 text-sm md:text-base font-semibold">{exp.company}</p>
                                <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{exp.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Education & Certifications */}
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-yellow-600 flex items-center gap-3 mb-10 uppercase">
                            <GraduationCap className="text-yellow-600 w-7 h-7" /> Education
                        </h3>

                        <div className="space-y-8">
                            {education.map((edu, i) => (
                                <motion.div
                                    key={i}
                                    className="flex justify-between items-center border-b border-gray-300 pb-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={edu.img}
                                            alt={edu.title}
                                            className="w-12 h-12 object-contain rounded-lg border border-gray-200"
                                        />
                                        <div>
                                            <h4 className=" font-semibold text-sm md:text-base text-gray-800">{edu.title}</h4>
                                            <p className="text-xs md:text-sm text-gray-600">{edu.org}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs md:text-sm text-gray-400 font-medium">{edu.year}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-yellow-600 flex items-center gap-3 mb-10 uppercase">
                            <MdOutlineBookmarkAdded className="text-yellow-600 text-3xl" /> Certifications
                        </h3>


                        <div className="space-y-4">
                            {(showMore ? certifications : certifications.slice(0, 2)).map((cert, i) => (
                                <motion.div
                                    key={i}
                                    className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div
                                        className="relative cursor-pointer"
                                        onClick={() => {
                                            setCurrentIndex(zoomImages.indexOf(cert.img));
                                            setZoomed(true);
                                        }}
                                    >
                                        <img
                                            src={cert.img}
                                            alt={cert.title}
                                            className="w-12 h-12 object-contain rounded border border-gray-300"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition">
                                            <Search className="text-white text-lg opacity-0 group-hover:opacity-100 transition" />
                                        </div>
                                    </div>

                                    <div className="ml-4 flex-1">
                                        <h4 className=" font-semibold text-sm md:text-base text-gray-800">{cert.title}</h4>
                                        <div className="text-sm flex items-center gap-2 text-gray-600">
                                            <span className="text-xs md:text-sm">{cert.org}</span>
                                            {cert.link && (
                                                <a
                                                    href={cert.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-yellow-600 hover:underline text-xs"
                                                >
                                                    View
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <span className="text-gray-500 text-xs md:text-sm">{cert.year}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Show More / Less */}
                        <div className="mt-6 flex justify-end">
                            <motion.button
                                onClick={() => setShowMore(!showMore)}
                                className="p-3 rounded-full bg-gray-100 text-gray-700 shadow hover:bg-yellow-500 hover:text-white transition"
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                {showMore ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Zoomed Image Modal */}
            <AnimatePresence>
                {zoomed && (
                    <motion.div
                        className="fixed inset-0  bg-opacity-80 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setZoomed(false)}
                    >
                        <motion.div
                            className="relative max-w-3xl w-full"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={zoomImages[currentIndex]}
                                alt="Zoomed"
                                className="w-full h-auto rounded-xl shadow-2xl"
                            />
                            <button
                                className="absolute top-3 right-3 text-gray-700 text-3xl"
                                onClick={() => setZoomed(false)}
                            >
                                <X />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
