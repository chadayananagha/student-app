import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="bg-green-600 text-white p-4 shadow-md"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold tracking-wide">
          Student WG Finder
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-green-100 transition">
            Home
          </Link>
          <Link to="/listings" className="hover:text-green-100 transition">
            Listings
          </Link>
          <Link to="/contact" className="hover:text-green-100 transition">
            Contact
          </Link>
          <Link to="/login" className="hover:text-green-100 transition">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-white text-green-600 font-medium px-4 py-2 rounded hover:bg-green-100 transition"
          >
            Sign Up
          </Link>
        </nav>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden mt-2 space-y-2 px-4 pb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/"
              className="block hover:text-green-100 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/listings"
              className="block hover:text-green-100 transition"
              onClick={() => setIsOpen(false)}
            >
              Listings
            </Link>
            <Link
              to="/contact"
              className="block hover:text-green-100 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block hover:text-green-100 transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block bg-white text-green-600 font-medium px-4 py-2 rounded text-center hover:bg-green-100 transition"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
