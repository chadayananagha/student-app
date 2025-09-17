import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-gray-50 p-10 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-8 tracking-tight">
          Login to Your Account
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="form-checkbox" />
              Remember me
            </label>
            <Link to="#" className="text-green-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-green-600 hover:underline font-medium"
          >
            Register here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
