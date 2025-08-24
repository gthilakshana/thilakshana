export default function Contact() {
    return (
        <section id="contact" className="bg-gray-50 py-20 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-start">
                {/* Section Header */}

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1 uppercase">
                    Contact
                </h2>
                <p className="text-gray-600 mt-2 text-medium">
                    Always open to questions, ideas, or a friendly hello let’s connect
                </p>
            </div>

            {/* Contact Form */}
            <form className="max-w-6xl mx-auto mt-12 bg-white shadow-lg p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full px-5 py-3 border  border-gray-300 focus:ring-2 focus:ring-gray-200 focus:outline-none transition"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full px-5 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:outline-none transition"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-5 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:outline-none transition"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full px-5 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:outline-none transition"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Choose a Topic</label>
                    <select className="w-full px-5 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:outline-none transition">
                        <option>Select One...</option>
                        <option>Web Development</option>
                        <option>UI/UX Design</option>
                        <option>Other</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                        rows="5"
                        className="w-full px-5 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:outline-none transition"
                        placeholder="Type your message..."
                    ></textarea>
                </div>



                <div className="text-center">
                    <button
                        type="submit"
                        className="px-10 py-3 bg-gradient-to-r text-white bg-yellow-400 hover:bg-yellow-500 transition duration-300 cursor-pointer"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}
