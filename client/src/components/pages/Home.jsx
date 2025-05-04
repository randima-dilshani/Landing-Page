import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import EventOverview from "./eventOverView";
import SpeakersPage from "./speakers";
import Agenda from "./agenda";
import About from "./about";
import Footer from "./footer";
import Navbar from "./navBar";

export default function Home() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const eventDate = new Date("2025-07-09T09:30:00+02:00");
    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();
      setDaysLeft(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))));
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 86400000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-white font-sans scroll-smooth">
      {/* Full-page background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#1a0033] via-black to-[#0f0c29]" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="mt-[110px] flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-24 relative z-10 overflow-hidden">
        
        {/* Glowing Background Effects */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-80 h-80 bg-purple-700 opacity-20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 opacity-20 blur-3xl rounded-full animate-pulse" />
        </div>

        {/* Event Image */}
        <motion.img
          src="/event-visual.png"
          alt="Event Visual"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="w-[380px] md:w-[450px] lg:w-[600px] rounded-2xl shadow-2xl z-10 object-cover"
        />

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-[520px] md:w-[600px] lg:w-[600px] bg-white/5 backdrop-blur-lg p-10 rounded-2xl shadow-2xl z-10 text-center border border-white/10"
        >
          {/* Hosted By */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="mb-6"
          >
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 uppercase tracking-wider drop-shadow-lg">
              Hosted by FINASTRA
            </p>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Reimagine Banking
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-2xl md:text-3xl text-purple-300 font-semibold mb-8"
          >
            Adapt. Evolve. Thrive.
          </motion.h2>

          {/* Event Info */}
          <div className="space-y-2">
            <p className="text-base text-gray-300">
              📅 9th July 2025 • 🕤 9:30 AM - 2:00 PM GMT+2
            </p>
            <p className="text-base text-gray-300">
              📍 The Nile Ritz-Carlton, Cairo, Egypt
            </p>
          </div>

          {/* Countdown */}
          <motion.div
            className="mt-8 hover:scale-105 transition-transform duration-300 inline-block"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold cursor-default">
              ⏳ {daysLeft} Days Left
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Event Overview Section */}
      <div id="overview">
        <EventOverview />
      </div>

      {/* Speakers Section */}
      <div id="speakers">
        <SpeakersPage />
      </div>

      {/* Agenda Section */}
      <div id="agenda">
        <Agenda />
      </div>

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
