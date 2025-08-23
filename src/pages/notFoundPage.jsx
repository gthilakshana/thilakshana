import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-50 px-6">
            <FaExclamationTriangle className="text-yellow-500 text-6xl mb-6 animate-bounce" />
            <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
            <p className="text-lg mb-8 text-center max-w-md">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 shadow-md transition"
            >
                <FaHome /> Go Back Home
            </Link>
        </div>
    );
}
