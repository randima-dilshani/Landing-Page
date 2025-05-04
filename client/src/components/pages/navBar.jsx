import React, { useState } from "react";
import { Button } from "../ui/button";
import { FiUserPlus, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataAsJson = JSON.stringify(formData);
    localStorage.setItem("registrationData", dataAsJson);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataAsJson,
      });

      const result = await response.json();
      console.log("Data sent to backend successfully:", result);
      setSuccessMessage("Registration successful!");

      setTimeout(() => {
        setShowModal(false);
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error sending data:", error);
      setSuccessMessage("There was an error. Please try again later.");
    }

    setFormData({ name: "", email: "", message: "" });
  };

  const closeModal = () => {
    setShowModal(false);
    setSuccessMessage("");
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 h-[100px] md:h-[110px] bg-gradient-to-tr from-[#1a0033] bg-opacity-100 backdrop-blur-[30px] bg-black/60 border border-white/20 shadow-[0_0_30px_rgba(228,227,237,0.2)]">
        <div className="h-full flex items-center px-6 py-4 text-white">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-14 w-auto ml-4" />
          </div>

          {/* Centered Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav className="flex gap-8 text-lg font-semibold tracking-wide">
              <a href="#overview" className="hover:text-pink-500 transition duration-300">Event Overview</a>
              <a href="#speakers" className="hover:text-pink-500 transition duration-300">Our Speakers</a>
              <a href="#agenda" className="hover:text-pink-500 transition duration-300">Agenda</a>
              <a href="#about" className="hover:text-pink-500 transition duration-300">About Finastra</a>
            </nav>
          </div>

          {/* Register & Mobile Menu */}
          <div className="flex items-center gap-4 ml-auto">
            <Button
              className="bg-[#4B0082] hover:bg-[#360061] text-white text-sm px-4 py-2 flex items-center gap-2"
              onClick={() => setShowModal(true)}
            >
              <FiUserPlus className="text-lg" />
              Register Now
            </Button>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <button onClick={() => setIsSidebarOpen(true)}>
                <FiMenu className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-60 md:hidden">
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-6 text-black z-50">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setIsSidebarOpen(false)}>
                <FiX className="text-2xl" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 text-lg font-semibold">
              <a href="#overview" onClick={() => setIsSidebarOpen(false)}>Event Overview</a>
              <a href="#speakers" onClick={() => setIsSidebarOpen(false)}>Our Speakers</a>
              <a href="#agenda" onClick={() => setIsSidebarOpen(false)}>Agenda</a>
              <a href="#about" onClick={() => setIsSidebarOpen(false)}>About Finastra</a>
            </nav>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center" onClick={closeModal}>
          <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-md relative" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4">Register</h2>

            {successMessage ? (
              <div className="flex flex-col items-center justify-center text-center space-y-4 py-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-green-700">Registration Successful!</h3>
                <p className="text-sm text-gray-600">Thank you for registering. We’ll be in touch shortly.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="text-gray-900 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700" placeholder="Your Name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="text-gray-900 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700" placeholder="you@example.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} className="text-gray-900 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700" rows="3" placeholder="Your message..." />
                </div>
                <div className="flex justify-center">
                  <Button type="submit" className="w-40 py-3 bg-slate-800 hover:bg-slate-900 text-white">
                    Submit
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
