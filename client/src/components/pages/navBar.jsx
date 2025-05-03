import React, { useState } from "react";
import { Button } from "../ui/button";
import { FiUserPlus } from "react-icons/fi";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataAsJson = JSON.stringify(formData);
    console.log("Form Data:", dataAsJson);

    // Save to localStorage
    localStorage.setItem("registrationData", dataAsJson);
    console.log("Data saved to localStorage.");

    // Simulate saving to a backend (replace with your real endpoint)
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataAsJson,
      });

      const result = await response.json();
      console.log("Data sent to backend successfully:", result);
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }

    // Reset and close
    setShowModal(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 h-[100px] md:h-[120px]">
        <div className="relative group h-full flex justify-between items-center px-6 py-4 bg-black bg-opacity-90 border-b border-white/10 shadow-lg z-10 transition duration-300 overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-[-2]">
            <img src="/D1.jpg" alt="Navbar Background" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-transparent pointer-events-none z-[-1]" />
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-14 w-auto ml-4" />
          </div>

          <nav className="hidden md:flex gap-8 text-lg font-semibold tracking-wide text-white">
            <a href="#overview" className="hover:text-pink-500 transition duration-300">Event Overview</a>
            <a href="#speakers" className="hover:text-pink-500 transition duration-300">Our Speakers</a>
            <a href="#agenda" className="hover:text-pink-500 transition duration-300">Agenda</a>
            <a href="#about" className="hover:text-pink-500 transition duration-300">About Finastra</a>
          </nav>

          <Button
            className="bg-[#4B0082] hover:bg-[#360061] text-white text-sm px-4 py-2 ml-6 flex items-center gap-2"
            onClick={() => setShowModal(true)}
          >
            <FiUserPlus className="text-lg" />
            Register Now
          </Button>
        </div>
      </header>

      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            <h2 className="text-xl font-bold mb-4">Register</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="text-gray-900 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="text-gray-900 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="text-gray-900 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
                  rows="3"
                  placeholder="Your message..."
                />
              </div>

              <div className="flex justify-center">
                <Button type="submit" className="w-40 py-3 bg-slate-800 hover:bg-slate-900 text-white">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
