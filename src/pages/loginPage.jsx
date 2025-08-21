import { FaUser, FaLock, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/"); // Navigate back to home
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
                <h1 className="text-3xl font-bold text-center text-gray-800">Welcome Back</h1>
                <p className="text-center text-red-500 font-semibold">
                    Admin Only — Please login to your account
                </p>


                <form className="space-y-4">
                    <div className="flex items-center border border-gray-500  px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                        <FaUser className="text-gray-400 mr-2" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full outline-none text-gray-700"
                        />
                    </div>

                    <div className="flex items-center border border-gray-500 px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                        <FaLock className="text-gray-400 mr-2" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full outline-none text-gray-700"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 shadow-md transition"
                    >
                        Login
                    </button>
                </form>

                {/* Back to Home Link */}
                <div className="text-center mt-4">
                    <span
                        onClick={goHome}
                        className="inline-flex items-center text-gray-600 hover:text-gray-800 cursor-pointer font-medium transition"
                    >
                        <FaHome className="mr-2" /> Back to Home
                    </span>
                </div>
            </div>
        </div>
    );
}
