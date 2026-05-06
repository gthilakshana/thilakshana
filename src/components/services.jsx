'use client';

import { motion } from "framer-motion";
import { 
    Layout, 
    Cpu, 
    Globe, 
    Smartphone, 
    Layers, 
    Cloud,
    ArrowRight,
    HelpCircle
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Services() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const iconMap = {
        Globe: <Globe className="w-8 h-8" />,
        Layout: <Layout className="w-8 h-8" />,
        Cloud: <Cloud className="w-8 h-8" />,
        Smartphone: <Smartphone className="w-8 h-8" />,
        Cpu: <Cpu className="w-8 h-8" />
    };

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await fetch('/api/services');
                const data = await res.json();
                setServices(data);
            } catch (err) {
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    if (loading) return null;
    if (services.length === 0) return null;

    return (
        <section id="services" className="relative py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.6em] text-primary mb-4 block">Specialization</span>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none">
                        Expert <span className="text-gradient">Services</span>
                    </h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1 bg-primary mx-auto mt-8 rounded-full"
                    ></motion.div>
                </motion.div>

                {/* Services Grid */}
                <div className={`grid gap-8 ${services.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className={`absolute -inset-1 bg-gradient-to-r ${service.color || 'from-primary/20 to-transparent'} rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700`}></div>
                            <div className="relative cinematic-glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                                <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-primary/10">
                                    {iconMap[service.icon] || <Globe className="w-8 h-8" />}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed font-light mb-8 flex-1">
                                    {service.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {(service.tags || []).map((tag, j) => (
                                        <span key={j} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/40 group-hover:text-primary group-hover:border-primary/20 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div 
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] group/link cursor-pointer w-fit"
                                >
                                    Discuss Project <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] -z-10 rounded-full"></div>
        </section>
    );
}
