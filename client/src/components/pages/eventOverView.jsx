import React from "react";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export default function EventOverview() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden px-6 py-20 text-white bg-gradient-to-br from-[#1a0033] via-black to-[#0f0c29]"
    >
      {/* Glowing background elements */}
      <div className="absolute -top-20 left-10 w-96 h-96 bg-pink-500 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-700 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />

      {/* Intro text block */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
       <motion.h2
  variants={fadeInUp}
  className="font-bold bg-gradient-to-r from-pink-500 via-red-400 to-yellow-300 text-transparent bg-clip-text mb-6"
  style={{
    fontSize: "56px", 
    lineHeight: "1.2",
    textAlign: "center",
    letterSpacing: "-0.02em"
  }}
>
  Event Overview
</motion.h2>

        <motion.p variants={fadeInUp} className="text-lg leading-8 text-gray-200">
          Join us on <strong>April 9th in Cairo, Egypt</strong>, for Finastra's Universal Banking Forum,
          <em> "Reimagine Banking: Adapt. Evolve. Thrive."</em> This exclusive event is designed to help
          you navigate and excel in the rapidly evolving banking landscape.
        </motion.p>

        <motion.p variants={fadeInUp} className="text-lg leading-8 mt-6 text-gray-300">
        Our forum will bring together business and technology experts, industry leaders, and visionaries to share their insights on the latest trends and challenges in the banking sector. You'll gain valuable knowledge on topics such as Generative AI, the impact of volatility, globalization challenges, persistent supply chain issues, recession threats, shifts in competitive dynamics, and evolving regulations.
        </motion.p>

        <motion.p variants={fadeInUp} className="text-lg leading-8 mt-6 text-gray-300">
        Each session will delve into the implications, challenges, and opportunities these topics present, providing you with practical strategies to leverage the latest technologies and capitalize on emerging opportunities. This is a unique chance to learn from the best in the industry, stay ahead of the curve, and connect with fellow retail banking professionals.
        </motion.p>

        <motion.p variants={fadeInUp} className="text-lg leading-8 mt-6 text-gray-200">
          <strong>Don't miss this opportunity</strong> to level up your skills and network.{" "}
          <span className="text-pink-400 font-semibold">Register today</span>!
        </motion.p>
      </motion.div>

      {/* Reasons to attend block */}
      <motion.div
  className="relative z-10 max-w-6xl mx-auto mt-24 flex flex-col md:flex-row items-center gap-10 bg-[#5f23b1] p-10 rounded-[3rem]"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
>
  {/* Reasons list - Now on the left */}
  <motion.div
    className="w-full md:w-1/2 text-left text-white"
    variants={slideFromLeft}
  >
    <h3 className="text-2xl md:text-3xl font-semibold mb-6">
      Top Reasons Why This is the Only Conference You Need to Attend in 2025
    </h3>
    <ul className="space-y-4 text-lg leading-7">
      <li>💡 Learn from industry experts</li>
      <li>📈 Stay ahead of emerging trends</li>
      <li>🤝 Connect with fellow banking professionals</li>
      <li>🎓 Enhance your knowledge, skills, and network</li>
      <li>💬 Share your expertise and experience with peers</li>
    </ul>
  </motion.div>

  {/* Image - Now on the right */}
  <motion.div
    className="w-full md:w-1/2 rounded-2xl overflow-hidden"
    variants={slideFromRight}
  >
    <img
      src="/image3.jpg"
      alt="Event Reasons"
      className="w-full h-auto object-cover rounded-2xl"
    />
  </motion.div>
</motion.div>
    </section>
  );
}
