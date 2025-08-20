export default function Contact() {
    return (
        <section className="bg-blue-50 py-16 px-6 md:px-16">
            <div className="max-w-4xl mx-auto text-center">
                {/* Section Header */}
                <p className="text-sm font-medium text-blue-600">Get In Touch</p>
                <h2 className="text-3xl font-bold text-gray-900 mt-1">Contact Me</h2>
                <p className="text-gray-600 mt-2">
                    I’d love to hear from you! Whether you have a question, project idea,
                    or just want to say hi — feel free to reach out.
                </p>
            </div>

            {/* Contact Form */}
            <form className="max-w-3xl mx-auto mt-10 bg-white rounded-2xl shadow-md p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-left text-sm font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="w-full mt-2 px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-left text-sm font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="w-full mt-2 px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-left text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full mt-2 px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-left text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            className="w-full mt-2 px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-left text-sm font-medium text-gray-700">
                        Choose a Topic
                    </label>
                    <select className="w-full mt-2 px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none">
                        <option>Select One...</option>
                        <option>Web Development</option>
                        <option>UI/UX Design</option>
                        <option>Consultation</option>
                        <option>Other</option>
                    </select>
                </div>

                <div>
                    <label className="block text-left text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        rows="5"
                        className="w-full mt-2 px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        placeholder="Type your message..."
                    ></textarea>
                </div>

                <div className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-blue-300" />
                    <label className="text-sm text-gray-700">I accept the terms</label>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}
