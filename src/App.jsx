import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </MainLayout>
  );
}
