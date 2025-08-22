// app/contact/page.tsx
import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8 min-h-screen">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            We'd love to hear from you! Fill out the form below or reach us through the provided details.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Your message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 sm:py-3 rounded-lg shadow-md transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Get in touch</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Feel free to reach out via email or phone. We’re here to help!
          </p>

          <div className="flex items-center gap-3 text-sm sm:text-base">
            <span className="w-6 h-6 text-yellow-400 flex-shrink-0">📞</span>
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3 text-sm sm:text-base">
            <span className="w-6 h-6 text-yellow-400 flex-shrink-0">✉️</span>
            <span>support@maxymart.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm sm:text-base">
            <span className="w-6 h-6 text-yellow-400 flex-shrink-0">📍</span>
            <span>123 Street, City, Country</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
