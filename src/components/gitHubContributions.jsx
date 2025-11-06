import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

export default function GitHubContributions() {
    return (
        <section id="github" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-extrabold text-center text-gray-800"
            >
                GitHub Contributions
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center text-gray-600 mt-3 mb-10  px-6"
            >
                A visual timeline of my daily coding activity on GitHub.
            </motion.p>



            {/* Card */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
                    max-w-4xl mx-auto 
                    bg-white  rounded-2xl 
                    p-5 sm:p-8 
                    border border-gray-200 
                    
                "
            >
                <div className="flex justify-center overflow-x-auto pb-2">
                    <GitHubCalendar
                        username="gthilakshana"
                        blockSize={14}
                        blockMargin={4}
                        colorScheme="light"
                        fontSize={12}
                    />
                </div>
            </motion.div>
        </section>
    );
}
