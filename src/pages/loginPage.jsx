import { FaUser, FaLock, FaHome } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 px-6 ">
            <div className="w-full max-w-md bg-gray-700 shadow-lg p-8 space-y-6  ">


                <div className="flex items-center justify-center h-[100px] w-full">
                    <Link >
                        <img
                            src="logo.png"
                            alt="Thilakshana Logo"
                            className="h-[250px]  hover:scale-105 transition-transform duration-300"
                        />
                    </Link>
                </div>




                <form className="space-y-4 mb-[30px]">
                    <div className="flex items-center border border-gray-50 px-3 py-2 focus-within:ring-2 focus-within:ring-white">
                        <FaUser className="text-gray-50 mr-2" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full outline-none text-gray-50"
                        />
                    </div>

                    <div className="flex items-center border border-gray-50 px-3 py-2 focus-within:ring-2 focus-within:ring-white">
                        <FaLock className="text-gray-50 mr-2" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full outline-none text-gray-50"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold py-2 shadow-md transition cursor-pointer"
                    >
                        Login
                    </button>
                </form>

            </div>

            <div className="flex absolute bottom-6 right-6">
                <button
                    onClick={goHome}
                    className="p-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 
               text-gray-50 shadow-lg hover:shadow-xl 
               hover:scale-110 transform transition-all duration-300 
               focus:outline-none focus:ring-2 focus:ring-yellow-300 cursor-pointer animate-bounce"
                >
                    <FaHome className="text-xl" />
                </button>
            </div>

        </div>
    );
}
