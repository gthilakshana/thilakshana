import { FaGithub, FaBehance } from "react-icons/fa";

export default function SocialButtons() {
    return (
        <div
            className="
                flex items-center justify-center gap-4
                px-4 py-3
                bg-white/10 backdrop-blur-xl
                border border-white/20
                rounded-2xl
                shadow-lg shadow-black/5
            "
        >
            {/* GitHub */}
            <a
                href="https://github.com/gthilakshana"
                target="_blank"
                className="
                    flex items-center justify-center
                    w-11 h-11
                    rounded-full
                    bg-gradient-to-br from-gray-900 to-gray-800
                    border border-white/10
                    shadow-md shadow-black/20
                    hover:shadow-lg hover:shadow-black/30
                    hover:scale-[1.12] active:scale-95
                    transition-all duration-300
                    hover:ring-2 hover:ring-white/30
                "
            >
                <FaGithub className="text-xl text-white" />
            </a>

            {/* Behance */}
            <a
                href="https://www.behance.net/gavrawathilaks"
                target="_blank"
                className="
                    flex items-center justify-center
                    w-11 h-11
                    rounded-full
                    bg-gradient-to-br from-blue-600 to-blue-500
                    border border-white/10
                    shadow-md shadow-blue-900/20
                    hover:shadow-lg hover:shadow-blue-900/30
                    hover:scale-[1.12] active:scale-95
                    transition-all duration-300
                    hover:ring-2 hover:ring-blue-300/40
                "
            >
                <FaBehance className="text-xl text-white" />
            </a>
        </div>
    );
}
