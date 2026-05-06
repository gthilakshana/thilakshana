import { FaGithub, FaBehance } from "react-icons/fa";

export default function SocialButtons() {
    const socials = [
        {
            icon: <FaGithub />,
            href: "https://github.com/gthilakshana",
            color: "bg-zinc-900 hover:shadow-zinc-900/40",
        },
        {
            icon: <FaBehance />,
            href: "https://www.behance.net/gavrawathilaks",
            color: "bg-[#0057ff] hover:shadow-[#0057ff]/40",
        }
    ];

    return (
        <div className="cinematic-glass p-2 sm:p-3 rounded-2xl flex flex-col gap-3">
            {socials.map((social, i) => (
                <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                        flex items-center justify-center
                        w-10 h-10 sm:w-11 sm:h-11
                        rounded-xl
                        ${social.color}
                        text-white text-xl
                        shadow-lg
                        hover:scale-110 active:scale-95
                        transition-all duration-300
                    `}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
}
