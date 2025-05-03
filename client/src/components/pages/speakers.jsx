import React from "react";
import { motion } from "framer-motion";

const speakers = [
  {
    name: "Mr. Mohamed Elazzazy",
    title: "Head of IT Governance and Change Management",
    company: "Al-Baraka Bank Egypt",
    image: "/mohamed.png",
  },
  {
    name: "Mr. Shehab Moustafa",
    title: "Country Center of Excellence Director",
    company: "Money Fellows",
    image: "/shehab.jpg",
  },
  {
    name: "Mr. Marwan Abouzeid",
    title: "Principal Solutions Consultant & Customer Value Lead, MEA & APAC",
    company: "Finastra",
    image: "/marwan.jpg",
  },
  {
    name: "Mr. Karim El Mourabet",
    title: "Solution Consulting Director - MEA",
    company: "Finastra",
    image: "/karim.jpg",
  },
  {
    name: "Ms. Siobhan Byron",
    title: "Executive Vice President, Universal Banking",
    company: "Finastra",
    image: "/siobhan.jpg",
  },
  {
    name: "Mr. Narendra Mistry",
    title: "Chief Product and Technology Officer, Universal Banking",
    company: "Finastra",
    image: "/narendra.jpg",
  },
  {
    name: "Mr. Ahmed Hamdy Bahey El Din",
    title: "Head of Information Technology",
    company: "Incolease",
    image: "/ahmed.png",
  },
  {
    name: "Mr. Emad Shawky Habib Hanna",
    title: "Chief Data and Analytics Officer",
    company: "Banque Misr",
    image: "/emad.png",
  },
  {
    name: "Ms. Heba Yehia",
    title: "Head of Digital Products",
    company: "Arab African International Bank",
    image: "/heba.jpg",
  },
  {
    name: "Mr. Hamid Nirouzad",
    title: "Managing Director - Africa",
    company: "Finastra Universal",
    image: "/hamid.jpg",
  },
  {
    name: "Mr. Rudy Kawmi",
    title: "Managing Director – Middle East, Africa & Asia-Pacific",
    company: "Finastra Universal Banking",
    image: "/rudy.jpg",
  },
  {
    name: "Mr. Matthew Hughes",
    title: "Head of FSSL, International Markets",
    company: "Atos",
    image: "/matthew.jpg",
  },
  {
    name: "Mr. Daragh O’Byrne",
    title: "Senior Director, Marketing, Universal Banking",
    company: "Finastra",
    image: "/daragh.jpg",
  },
  {
    name: "Dr. Ismail Ali",
    title: "Co-Founder and CEO",
    company: "CARTTech",
    image: "/ismail.jpg",
  },
  {
    name: "Ms. Riham Muhammad",
    title: "Corporate CEX Senior Analyst",
    company: "FABMISR",
    image: "/riham.png",
  },
];

export default function SpeakersPage() {
  return (
    <section className="relative bg-[#0c0a1a] min-h-screen py-24 px-6 text-white">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
      <motion.h2
  className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-yellow-300 mb-16 tracking-tight"
  style={{
    fontSize: "56px",       
    lineHeight: "1.2",
    letterSpacing: "-0.02em"
  }}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  Our Speakers
</motion.h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              className="bg-[#1a152b] p-6 rounded-2xl text-center shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(168, 85, 247, 0.35)",
                transition: { type: "spring", stiffness: 200 },
              }}
            >
              <motion.img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-64 object-cover rounded-xl mb-6"
                whileHover={{
                  scale: 1.05,
                  filter: "brightness(1.1)",
                  transition: { duration: 0.4 },
                }}
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {speaker.name}
              </h3>
              <p className="text-sm text-gray-300 mb-1">{speaker.title}</p>
              <p className="text-sm text-gray-400">{speaker.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
