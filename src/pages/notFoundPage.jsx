import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 px-6">

            {/* Animated Icon */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 150, damping: 10 }}
                className="mb-6"
            >
                <FaExclamationTriangle className="text-yellow-400 text-7xl drop-shadow-lg animate-bounce" />
            </motion.div>

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-extrabold text-center mb-4"
            >
                Oops! Page Not Found
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-gray-600 mb-8 text-center max-w-md"
            >
                The page you’re looking for doesn’t exist or might have been moved.
            </motion.p>

            {/* Back Home Button */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link
                    to="/"
                    className="flex items-center gap-2 bg-yellow-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                    <FaHome className="text-lg" />
                    Go Back Home
                </Link>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute bottom-10 opacity-10 text-9xl font-extrabold select-none pointer-events-none text-gray-400">
                404
            </div>
        </div>
    );
}
