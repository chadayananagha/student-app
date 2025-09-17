import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-800">
      <Header />
      <main className="flex-grow bg-gray-50 px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}
