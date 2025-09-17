import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <motion.div
        className="max-w-lg w-full bg-gray-50 rounded-xl shadow-lg p-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-green-700 tracking-tight">
          Contact Us
        </h2>
        <form className="flex flex-col space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-green-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-green-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="border border-green-300 rounded px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold transition"
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
}
