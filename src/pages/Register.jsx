import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full bg-gray-50 p-10 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-8 tracking-tight">
          Sign Up
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-green-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-green-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-green-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-green-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
