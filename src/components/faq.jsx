'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const res = await fetch('/api/faqs');
                const data = await res.json();
                setFaqs(data);
            } catch (err) {
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchFaqs();
    }, []);

    const [activeIndex, setActiveIndex] = useState(null);

    if (loading) return null;
    if (faqs.length === 0) return null;

    return (
        <section id="faq" className="relative py-24 overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.6em] text-primary mb-4 block">Inquiries</span>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none">
                        Common <span className="text-gradient">Questions</span>
                    </h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1 bg-primary mx-auto mt-8 rounded-full"
                    ></motion.div>
                </motion.div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                                activeIndex === i 
                                ? "bg-primary/10 border-primary/30" 
                                : "bg-white/5 border-white/5 hover:border-white/20"
                            }`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                className="w-full p-6 md:p-8 flex items-center justify-between text-left outline-none"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-lg transition-colors ${activeIndex === i ? "bg-primary text-white" : "bg-white/5 text-primary"}`}>
                                        <HelpCircle size={18} />
                                    </div>
                                    <span className={`text-base md:text-xl font-bold transition-colors ${activeIndex === i ? "text-white" : "text-white/70"}`}>
                                        {faq.question}
                                    </span>
                                </div>
                                <div className={`transition-transform duration-500 ${activeIndex === i ? "rotate-180" : ""}`}>
                                    {activeIndex === i ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-white/20" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className="px-6 md:px-8 pb-8 text-[var(--text-muted)] text-sm md:text-base leading-relaxed font-light border-t border-white/5 pt-6">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -z-10 rounded-full"></div>
        </section>
    );
}
