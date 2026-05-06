'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
    Mail, 
    MessageSquare, 
    Send, 
    CheckCircle2, 
    AlertCircle, 
    Loader2, 
    Linkedin, 
    Github, 
    MapPin,
    Phone
} from "lucide-react";

export default function Contact() {
    // Form state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        service: "Web Development",
        message: ""
    });
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    subject: formData.service,
                    message: formData.message
                })
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({ firstName: "", lastName: "", email: "", service: "Web Development", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setErrorMessage(result.message || "Something went wrong.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Failed to connect to the server.");
        }
    };

    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5" />,
            label: "Email Me",
            value: "gavrawavanniarachchi@gmail.com",
            href: "mailto:gavrawavanniarachchi@gmail.com"
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "Gavrawa Thilakshana",
            href: "https://linkedin.com/in/gavrawa-thilakshana"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            label: "Location",
            value: "Matara, Sri Lanka",
            href: "#"
        }
    ];

    return (
        <section id="contact" className="relative py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 text-primary mb-6">
                        <div className="h-[1px] w-8 bg-primary"></div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Get in Touch</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none mb-8">
                        Let's <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="text-[var(--text-muted)] text-base md:text-xl font-light max-w-2xl leading-relaxed">
                        Have a project in mind or just want to chat? I'm always open to discussing new opportunities and creative ideas.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-16">
                    {/* Contact Info Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="grid grid-cols-1 gap-6">
                            {contactInfo.map((info, i) => (
                                <motion.a
                                    key={i}
                                    href={info.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="cinematic-glass p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-1">
                                                {info.label}
                                            </p>
                                            <p className="text-[var(--text-main)] font-medium break-all">
                                                {info.value}
                                            </p>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Additional Text */}
                        <div className="cinematic-glass p-8 rounded-[2rem] border border-primary/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <MessageSquare className="w-24 h-24" />
                            </div>
                            <h4 className="text-xl font-bold mb-4 relative z-10">Why work with me?</h4>
                            <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light relative z-10">
                                I bring a unique blend of technical expertise and creative vision to every project. My focus is on delivering high-quality, scalable solutions that drive results.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="lg:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-black/40 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative"
                        >
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-20 text-center"
                                >
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-3xl font-display font-bold mb-3">Message Sent Successfully!</h3>
                                    <p className="text-[var(--text-muted)] max-w-md mx-auto">
                                        Thank you for reaching out. I've received your message and will get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-10 px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2 group">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] ml-1 transition-colors group-focus-within:text-primary">
                                                First Name
                                            </label>
                                            <input
                                                required
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="John"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[var(--text-main)] outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all placeholder:text-white/10"
                                            />
                                        </div>
                                        <div className="space-y-2 group">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] ml-1 transition-colors group-focus-within:text-primary">
                                                Last Name
                                            </label>
                                            <input
                                                required
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="Doe"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[var(--text-main)] outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all placeholder:text-white/10"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2 group">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] ml-1 transition-colors group-focus-within:text-primary">
                                                Email Address
                                            </label>
                                            <input
                                                required
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[var(--text-main)] outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all placeholder:text-white/10"
                                            />
                                        </div>
                                        <div className="space-y-2 group">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] ml-1 transition-colors group-focus-within:text-primary">
                                                What do you need?
                                            </label>
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[var(--text-main)] outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all cursor-pointer appearance-none"
                                            >
                                                <option className="bg-[#111]" value="Web Development">Web Development</option>
                                                <option className="bg-[#111]" value="UI/UX Design">UI/UX Design</option>
                                                <option className="bg-[#111]" value="Full Stack Solution">Full Stack Solution</option>
                                                <option className="bg-[#111]" value="Consultation">Consultation</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2 group">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] ml-1 transition-colors group-focus-within:text-primary">
                                            Message
                                        </label>
                                        <textarea
                                            required
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            placeholder="Tell me about your vision..."
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[var(--text-main)] outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all resize-none placeholder:text-white/10"
                                        ></textarea>
                                    </div>

                                    {status === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="flex items-center gap-3 text-red-400 bg-red-400/10 p-4 rounded-xl border border-red-400/20"
                                        >
                                            <AlertCircle className="w-5 h-5" />
                                            <p className="text-sm font-medium">{errorMessage}</p>
                                        </motion.div>
                                    )}

                                    <div className="flex justify-end pt-4">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            disabled={status === "loading"}
                                            type="submit"
                                            className={`
                                                relative group overflow-hidden
                                                inline-flex items-center gap-4 px-12 py-5 
                                                bg-primary text-white font-bold rounded-2xl 
                                                shadow-xl shadow-primary/20 hover:bg-primary-dark 
                                                transition-all duration-300
                                                ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}
                                            `}
                                        >
                                            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                            {status === "loading" ? (
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                            ) : (
                                                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            )}
                                            <span className="relative z-10 uppercase tracking-[0.2em] text-[10px]">
                                                {status === "loading" ? "Processing..." : "Send Proposal"}
                                            </span>
                                        </motion.button>
                                    </div>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10"></div>
        </section>
    );
}
