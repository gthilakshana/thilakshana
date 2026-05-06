import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaInstagram,
    FaTwitter,
    FaArrowUp
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Resume", href: "#resume" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { icon: <FaGithub />, href: "https://github.com/gthilakshana", label: "GitHub" },
        { icon: <FaLinkedin />, href: "https://linkedin.com/in/gavrawa-thilakshana", label: "LinkedIn" },
        { icon: <FaInstagram />, href: "https://www.instagram.com/gavrawa_thilakshana_", label: "Instagram" },
        { icon: <FaEnvelope />, href: "mailto:gavrawavanniarachchi@gmail.com", label: "Email" },
    ];

    return (
        <footer className="relative pt-24 pb-12 overflow-hidden border-t border-[var(--glass-border)] bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6 col-span-1 md:col-span-2 lg:col-span-1 text-center md:text-left">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="group cursor-pointer inline-block"
                        >
                            <span className="text-2xl md:text-3xl font-display font-extrabold uppercase tracking-[0.2em] text-gradient">
                                Thilakshana
                            </span>
                        </motion.div>
                        <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-sm mx-auto md:mx-0 font-light">
                            Crafting high-performance digital experiences through innovative code and cinematic design. Specialized in Next.js and the MERN stack.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div className="text-center md:text-left">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        className="text-[var(--text-muted)] hover:text-primary transition-colors text-sm font-medium tracking-widest uppercase"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Expertise Column */}
                    <div className="text-center md:text-left">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8">Expertise</h4>
                        <ul className="space-y-4 text-[var(--text-muted)] text-sm font-light">
                            <li>Full Stack Development</li>
                            <li>Next.js Ecosystem</li>
                            <li>UI/UX Engineering</li>
                            <li>Cloud Architecture</li>
                            <li>AI Integration</li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div className="text-center md:text-left">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8">Connect</h4>
                        <div className="flex justify-center md:justify-start gap-4 mb-8">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-xl cinematic-glass text-[var(--text-muted)] hover:text-primary hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
                                    aria-label={social.label}
                                >
                                    <span className="text-lg">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                        <p className="text-xs text-[var(--text-muted)] font-light italic">
                            Open for collaborations.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[var(--glass-border)] flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--text-muted)]">
                            © {new Date().getFullYear()} Gavrawa Thilakshana. All Rights Reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <p className="text-[9px] text-[var(--text-muted)]/60 uppercase tracking-[0.4em] hidden md:block">
                            Innovation • Quality • Integrity
                        </p>
                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 blur-[120px] -z-10"></div>
        </footer>
    );
}
