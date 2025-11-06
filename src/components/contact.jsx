import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Contact() {
    const fullText = "Contact";
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
            id="contact"
            className="bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 px-6 md:px-16 flex flex-col items-center"
        >
            {/* Typing Animated Title */}
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
                        0%, 50%, 100% {
                            opacity: 1;
                        }
                        25%, 75% {
                            opacity: 0;
                        }
                    }
                `}</style>
            </h2>

            {/* Contact Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-gray-100"
            >
                <form className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                className="w-full px-5 py-3 border text-gray-900 text-sm  border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-100 focus:border-yellow-500 outline-none transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                className="w-full px-5 py-3 border text-gray-900 text-sm  border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-100 focus:border-yellow-500 outline-none transition"
                            />
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-5 py-3 border text-gray-900 text-sm  border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-100 focus:border-yellow-500 outline-none transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your phone number"
                                className="w-full px-5 py-3 text-gray-900 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-100 focus:border-yellow-500 outline-none transition"
                            />
                        </div>
                    </div>

                    {/* Topic Dropdown */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Choose a Topic
                        </label>
                        <select className="w-full px-5 py-3 border text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-yellow-100 focus:border-yellow-500 outline-none transition bg-white">
                            <option>Select one...</option>
                            <option>Web Development</option>
                            <option>UI/UX Design</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Message Field */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Message
                        </label>
                        <textarea
                            rows="5"
                            placeholder="Type your message..."

                            className="w-full px-5 py-3 border text-gray-900 text-sm  border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-100 focus:border-yellow-500 outline-none transition resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="px-10 py-3  bg-yellow-600 cursor-pointer  text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                            Send Message
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
}
