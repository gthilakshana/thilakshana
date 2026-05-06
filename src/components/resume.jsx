'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Search, X, ChevronDown, ChevronUp } from "lucide-react";
import { MdOutlineBookmarkAdded } from "react-icons/md";

export default function Resume() {
    const [showMore, setShowMore] = useState(false);
    const [zoomed, setZoomed] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const experiences = [
        {
            role: "Full Stack Software Engineer",
            company: "Make It Viral Media & Technologies",
            period: "Present",
            desc: "Leading the development of high-impact web applications using Next.js. Developed Warehouse & Logistics platforms, Restaurant Management systems, and managed cloud infrastructure on AWS and Hostinger.",
        },
        {
            role: "Software Engineering Intern",
            company: "Make It Viral Media & Technologies",
            period: "6 Months",
            desc: "Designed and engineered professional portfolio websites, full-stack MERN applications like 'Lustre Salon' with admin dashboards, and Property Management Systems using Next.js.",
        },
        {
            role: "Freelance Full Stack Developer",
            company: "Self-Employed",
            period: "Present",
            desc: "Developing and deploying custom web solutions for diverse clients. Specialized in building high-performance e-commerce platforms, portfolio websites, and custom management systems using the Next.js and MERN stack.",
        },
    ];

    const education = [
        {
            title: "BEng. In Software Engineering",
            org: "IIC University of Technology, Cambodia",
            year: "Graduated",
            img: "/IIC_Logo.png",
        },
        {
            title: "Higher National Diploma (HND)",
            org: "SEG Awards, UK",
            year: "Completed",
            img: "/Seg_awards.png",
        },
        {
            title: "Diploma in Software Engineering",
            org: "SEG Awards, UK",
            year: "Completed",
            img: "/Seg_awards.png",
        },
        {
            title: "Advanced Level (A/L)",
            org: "Combined Mathematics Stream • Thihagoda National School",
            year: "2017 – 2020",
            img: "/school.jpg",
        },
    ];

    const certifications = [
        {
            title: "Cloud Operations & AWS Practitioner Masterclass",
            org: "IDET",
            year: "In Progress",
            img: "/aws.jpg",
        },
        {
            title: "CS50's Introduction to Databases with SQL",
            org: "Harvard University",
            year: "2025",
            link: "https://certificates.cs50.io/b6832460-efea-41e4-ac1e-950300e93c1c.pdf?size=letter",
            img: "/CS50_SQL.png",
        },
        {
            title: "CS50's Introduction to Programming with Python",
            org: "Harvard University",
            year: "2025",
            link: "https://certificates.cs50.io/3dbc26fe-3967-4c39-902e-52639810aa77.pdf?size=letter",
            img: "/CS50_Python.png",
        },
        {
            title: "CS50's Web Programming with Python and JavaScript",
            org: "Harvard University",
            year: "In Progress",
            img: "/CS50_SQL.png",
        },
        {
            title: "Java Programming",
            org: "Evotech Education",
            year: "2021",
            img: "/java_evo.jpg",
        },
        {
            title: "Photoshop Basics to Advanced",
            org: "Kelani External Degree Institute",
            year: "2021",
            img: "/photoshop.jpg",
        },
    ];

    const zoomImages = certifications.map((c) => c.img);



    return (
        <section
            id="resume"
            className="relative py-24 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.6em] text-primary mb-4 block">Milestones</span>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none mb-8">
                        My <span className="text-gradient">Background</span>
                    </h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1 bg-primary mx-auto mt-8 rounded-full"
                    ></motion.div>
                </motion.div>

                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16">
                    {/* Experience Section */}
                    <div className="w-full pr-6 md:pr-0 space-y-12">
                        <div className="flex items-center gap-4 mb-10 px-2 md:px-0">
                            <div className="p-2.5 bg-primary/10 rounded-xl">
                                <Briefcase className="text-primary w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <h3 className="text-xl md:text-3xl font-display font-bold uppercase tracking-wider">Experience</h3>
                        </div>

                        <div className="space-y-10">
                            {experiences.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-2 md:gap-8 w-full max-w-full overflow-hidden pr-4 md:pr-0"
                                >
                                    {/* Timeline Line & Dot */}
                                    <div className="flex flex-col items-center flex-shrink-0 w-8 md:w-auto">
                                        <div className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full ring-4 ring-primary/20"></div>
                                        <div className="flex-1 w-[2px] bg-primary/20 my-2"></div>
                                    </div>
 
                                    {/* Content Card */}
                                    <div className="flex-1 cinematic-glass p-5 md:p-8 rounded-2xl md:rounded-3xl group hover:border-primary/40 transition-colors overflow-hidden min-w-0 mb-6">
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full mb-4 uppercase tracking-widest">
                                            {exp.period}
                                        </span>
                                        <h4 className="text-base md:text-xl font-bold mb-1 group-hover:text-primary transition-colors break-words leading-tight">
                                            {exp.role}
                                        </h4>
                                        <p className="text-primary font-medium text-[10px] md:text-sm mb-4">{exp.company}</p>
                                        <p className="text-[var(--text-muted)] text-xs md:text-base leading-relaxed font-light break-words">
                                            {exp.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education & Certifications Section */}
                    <div className="w-full pr-6 md:pr-0 space-y-16 md:space-y-20">
                        {/* Education */}
                        <div className="space-y-8 md:space-y-10">
                            <div className="flex items-center gap-4">
                                <div className="p-2.5 bg-primary/10 rounded-xl">
                                    <GraduationCap className="text-primary w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <h3 className="text-xl md:text-3xl font-display font-bold uppercase tracking-wider">Education</h3>
                            </div>

                            <div className="space-y-6">
                                {education.map((edu, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 rounded-2xl hover:bg-primary/5 transition-colors group pr-4 md:pr-0"
                                    >
                                        <img
                                            src={edu.img}
                                            alt={edu.org}
                                            className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-xl bg-white p-2 shadow-lg group-hover:scale-110 transition-transform"
                                        />
                                        <div className="flex-1 w-full">
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                                <h4 className="font-bold text-[var(--text-main)] text-sm md:text-base group-hover:text-primary transition-colors">
                                                    {edu.title}
                                                </h4>
                                                <span className="text-[10px] font-bold text-primary px-2 py-0.5 bg-primary/10 rounded-md">
                                                    {edu.year}
                                                </span>
                                            </div>
                                            <p className="text-xs md:text-sm text-[var(--text-muted)] break-words">{edu.org}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="space-y-8 md:space-y-10">
                            <div className="flex items-center gap-4">
                                <div className="p-2.5 bg-primary/10 rounded-xl">
                                    <MdOutlineBookmarkAdded className="text-primary w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <h3 className="text-xl md:text-3xl font-display font-bold uppercase tracking-wider">Certifications</h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {certifications.map((cert, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                        viewport={{ once: true }}
                                        className={`cinematic-glass p-4 rounded-2xl flex items-center gap-4 group cursor-pointer hover:border-primary/40 mx-1 ${!showMore && i >= 4 ? 'hidden md:flex' : 'flex'}`}
                                        onClick={() => {
                                            setCurrentIndex(zoomImages.indexOf(cert.img));
                                            setZoomed(true);
                                        }}
                                    >
                                        <div className="relative overflow-hidden rounded-lg w-12 h-12 flex-shrink-0">
                                            <img
                                                src={cert.img}
                                                alt={cert.title}
                                                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <Search className="text-white w-5 h-5" />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold truncate group-hover:text-primary transition-colors">
                                                {cert.title}
                                            </h4>
                                            <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-tighter">
                                                {cert.org} • {cert.year}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity mx-auto pt-8 md:hidden"
                            >
                                {showMore ? (
                                    <>Show Less <ChevronUp className="w-4 h-4" /></>
                                ) : (
                                    <>View All Certs <ChevronDown className="w-4 h-4" /></>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {zoomed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] backdrop-blur-2xl bg-black/80 flex items-center justify-center p-6"
                        onClick={() => setZoomed(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, rotateX: 20 }}
                            animate={{ scale: 1, rotateX: 0 }}
                            exit={{ scale: 0.8, rotateX: -20 }}
                            className="relative max-w-4xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={zoomImages[currentIndex]}
                                alt="Certification"
                                className="w-full rounded-2xl shadow-[0_0_50px_rgba(234,179,8,0.3)]"
                            />
                            <button
                                onClick={() => setZoomed(false)}
                                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
