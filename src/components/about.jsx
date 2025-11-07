import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function About() {
    const fullText = "About Me";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!deleting) {

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
            id="about"
            className="bg-gray-50 py-16 px-6 md:px-16 border-b border-gray-200"
        >

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






            <motion.div
                className="max-w-full mx-auto grid md:grid-cols-2 gap-2 items-center "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >


                {/* Left Side - Image */}
                <motion.div
                    className="flex justify-center items-center"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <motion.img
                        src="/profile.png"
                        alt="Profile"
                        className="w-40 sm:w-60 md:w-90 rounded-xl object-cover "
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        transition={{ type: "spring", stiffness: 150 }}
                    />
                </motion.div>

                {/* Right Side - Text */}
                <motion.div
                    className="text-center md:text-left mt-10 md:mt-0"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >


                    <motion.p
                        className="text-gray-900  leading-relaxed mb-6 "
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                    >
                        Hi, I’m <span className="font-semibold  text-black">Gavrawa Thilakshana</span>,
                        a passionate <span className="font-semibold text-yellow-600">Full Stack Developer</span> and
                        <span className="font-semibold text-yellow-600"> UI/UX Designer</span> dedicated to creating
                        modern, responsive, and user-friendly web applications. I enjoy transforming complex ideas into
                        elegant, scalable solutions using cutting-edge web technologies.
                    </motion.p>

                    <motion.p
                        className="text-gray-900 leading-relaxed mb-6 "
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.7 }}
                    >
                        I hold a <span className="font-medium text-yellow-600">Bachelor of Engineering in Software Engineering </span>
                        from <span className="font-medium text-yellow-600">IIC University of Technology, Cambodia</span>.
                        I completed my <span className="font-medium text-yellow-600">Advanced Level</span> education at
                        <span className="font-medium text-yellow-600"> M/R Thihagoda National School, Matara, Sri Lanka</span>.
                    </motion.p>

                    <motion.p
                        className="text-gray-900 leading-relaxed mb-6 "
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                    >
                        Currently, I’m working as a <span className="font-medium text-yellow-600">Full Stack Developer Intern </span>
                        at <span className="font-medium text-yellow-600">Make It Viral Media & Tech Pvt Ltd</span>,
                        where I develop full-stack web applications using the
                        <span className="font-medium text-yellow-600"> MERN stack (MongoDB, Express.js, React, Node.js)</span> and
                        <span className="font-medium text-yellow-600"> Next.js</span>. My focus is on building seamless UI/UX designs,
                        enhancing performance, and delivering top-tier digital experiences.
                    </motion.p>


                    <motion.p
                        className="text-gray-900 leading-relaxed mb-6 "
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.85, duration: 0.7 }}
                    >
                        I am also currently expanding my skills in <span className="font-medium text-yellow-600">Linux-based server-side development</span>,
                        focusing on system administration, deployment, and optimization for high-performance web environments.
                        This helps me understand the backend infrastructure that powers scalable web applications.
                    </motion.p>

                    <motion.p
                        className="text-gray-900 leading-relaxed  mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.7 }}
                    >
                        Beyond coding, I’m passionate about creative design, continuous learning, and exploring
                        emerging technologies that shape the web’s future. My goal is to blend technical mastery
                        with creative innovation to build impactful applications that inspire and empower users.
                    </motion.p>


                    {/* Resume Button */}
                    <motion.a
                        href="/cv/Gavrawa_Thilakshana.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-yellow-600 text-white font-semibold rounded-full shadow-md hover:bg-yellow-700 hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaDownload className="text-md" />
                        Resume
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
}
