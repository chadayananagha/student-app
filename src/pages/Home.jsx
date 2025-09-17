import React from "react";
import AnimatedHeading from "../components/AnimatedHeading";

import { motion } from "framer-motion";

const features = [
  {
    title: "Easy Search",
    description: "Find your ideal WG with powerful filters and fast results.",
    icon: (
      <svg
        className="w-8 h-8 text-green-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M8 11a5 5 0 1110 0 5 5 0 01-10 0z"
        />
      </svg>
    ),
  },
  {
    title: "Verified Listings",
    description: "All listings are checked for authenticity and quality.",
    icon: (
      <svg
        className="w-8 h-8 text-green-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4M12 20a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>
    ),
  },
  {
    title: "Community Support",
    description: "Connect with other students and share your experiences.",
    icon: (
      <svg
        className="w-8 h-8 text-green-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20 px-6 text-center shadow-md">
        <AnimatedHeading />
        <p className="text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Browse shared flats, meet roommates, and settle in the perfect place.
        </p>
        <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-0 rounded overflow-hidden shadow-lg mt-6">
          <input
            type="text"
            placeholder="Search by location, price, or features..."
            className="flex-grow px-4 py-3 text-gray-900 rounded sm:rounded-l focus:outline-none"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 text-sm sm:text-base font-semibold rounded sm:rounded-r transition"
          >
            Search
          </button>
        </form>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {features.map(({ title, description, icon }, index) => (
            <motion.div
              key={title}
              className="bg-gray-50 border border-green-100 rounded-xl p-8 shadow-sm hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="mb-4 mx-auto">{icon}</div>
              <h3 className="text-2xl font-semibold text-green-800 mb-2">
                {title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
