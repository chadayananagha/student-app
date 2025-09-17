import React from "react";
import { motion } from "framer-motion";

export default function AnimatedHeading() {
  return (
    <div className="text-center mt-10">
      <motion.h1
        className="text-5xl font-extrabold text-green-700 tracking-tight mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Find Your Perfect Student WG
      </motion.h1>
    </div>
  );
}
