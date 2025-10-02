import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 m-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-8">
          We'd love to hear from you! Reach out to us via the details below.
        </p>

        {/* Contact Details */}
        <div className="space-y-6">
          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-700 p-3 rounded-full">
              📞
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Phone</p>
              <p className="text-gray-500">9263927371</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-700 p-3 rounded-full">
              📧
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Email</p>
              <p className="text-gray-500">pradhanatul629@gmail.com</p>
            </div>
          </div>

          {/* Address
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-700 p-3 rounded-full">
              📍
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Address</p>
              <p className="text-gray-500">
                123 Demo Street, Suite 456, Cityville, Country
              </p>
            </div>
          </div> */}

          {/* Website */}
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-700 p-3 rounded-full">
              🌐
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Website</p>
              <p className="text-gray-500">www.demowebsite.com</p>
            </div>
          </div>
        </div>

        {/* Optional: Contact Form */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Send Us a Message
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
