import { FaGithub, FaBehance } from "react-icons/fa";

export default function SocialButtons() {
    return (
        <div
            className="
                flex items-center justify-center gap-3
                px-3 py-2.5
                bg-white/10 backdrop-blur-xl
                border border-gray-300
                rounded-xl
                shadow-lg shadow-black/5

                sm:gap-4 sm:px-4 sm:py-3
                md:gap-2 md:px-3 md:py-3 md:rounded-2xl
            "
        >
            {/* GitHub */}
            <a
                href="https://github.com/gthilakshana"
                target="_blank"
                className="
                    flex items-center justify-center
                    w-9 h-9
                    rounded-full
                    bg-gradient-to-br from-gray-900 to-gray-800
                    border border-white/10
                    shadow-md shadow-black/20

                    hover:shadow-lg hover:shadow-black/30
                    hover:scale-[1.1] active:scale-95
                    transition-all duration-300
                    hover:ring-2 hover:ring-white/30

                    sm:w-10 sm:h-10
                    md:w-11 md:h-11
                "
            >
                <FaGithub className="text-lg sm:text-xl text-white" />
            </a>

            {/* Behance */}
            <a
                href="https://www.behance.net/gavrawathilaks"
                target="_blank"
                className="
                    flex items-center justify-center
                    w-9 h-9
                    rounded-full
                    bg-gradient-to-br from-blue-600 to-blue-500
                    border border-white/10
                    shadow-md shadow-blue-900/20

                    hover:shadow-lg hover:shadow-blue-900/30
                    hover:scale-[1.1] active:scale-95
                    transition-all duration-300
                    hover:ring-2 hover:ring-blue-300/40

                    sm:w-10 sm:h-10
                    md:w-11 md:h-11
                "
            >
                <FaBehance className="text-lg sm:text-xl text-white" />
            </a>
        </div>
    );
}
