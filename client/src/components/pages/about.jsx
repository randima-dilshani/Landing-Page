import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] py-24 px-6 text-white">
      {/* Background pattern or overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Animated Heading with Agenda Gradient */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-yellow-300 mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Finastra
        </motion.h2>

        {/* Glassmorphism Info Box */}
        <motion.div
          className="bg-white/5 backdrop-blur-md rounded-xl p-6 md:p-10 border border-white/10 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-200 leading-relaxed">
            Finastra is a global provider of financial services software applications across Lending, Payments, Treasury and Capital Markets, and Universal (retail and digital) Banking.
            Committed to unlocking the potential of people, businesses and communities everywhere, its vision is to accelerate the future of Open Finance through technology and collaboration.
            Its pioneering approach is why it is trusted by ~8,100 financial institutions, including 45 of the world's top 50 banks.
          </p>

          <p className="mt-6 text-sm text-teal-300">
            For more information, visit{" "}
            <a
              href="https://www.finastra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cyan-400 transition duration-200"
            >
              www.finastra.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
