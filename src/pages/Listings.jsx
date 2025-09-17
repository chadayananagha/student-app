import React from "react";
import { motion } from "framer-motion";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.avif";

const listings = [
  {
    id: 1,
    title: "Cozy room in Kreuzberg",
    description:
      "Room available in a 3-person WG near U-Bahn. Rent: €450/month.",
    imageUrl: room1,
  },
  {
    id: 2,
    title: "Flatmate wanted in Prenzlauer Berg",
    description: "Looking for a clean and social student. Rent: €500/month.",
    imageUrl: room2,
  },
  {
    id: 3,
    title: "Sunny WG in Neukölln",
    description:
      "Nice 2-bedroom WG, furnished, good public transport. Rent: €400/month.",
    imageUrl: room3,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Listings() {
  return (
    <div className="min-h-screen bg-white py-20 px-6 max-w-7xl mx-auto">
      <motion.h2
        className="text-4xl font-extrabold text-green-700 mb-12 text-center tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Available Listings
      </motion.h2>
      <div className="grid gap-10 md:grid-cols-3">
        {listings.map(({ id, title, description, imageUrl }, i) => (
          <motion.div
            key={id}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="rounded-xl border border-green-100 shadow-sm hover:shadow-lg overflow-hidden bg-gray-50 transition duration-300"
          >
            <img
              src={imageUrl}
              alt={title}
              className="h-48 w-full object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
