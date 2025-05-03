import React from "react";
import { motion } from "framer-motion";

const agenda = [
  { time: "09:30 AM", title: "Registration & Welcome Coffee", speakers: [] },
  { time: "10:00 AM", title: "Opening Remarks", speakers: ["Rudy Kawmi, Finastra Universal Banking"] },
  { time: "10:10 AM", title: "Keynote Session: Digital Transformation in a Gen AI World", speakers: ["Siobhan Byron, EVP, Finastra Universal Banking"] },
  { time: "10:30 AM", title: "Decoding the Future – Transformation Time", speakers: ["Daragh O’Byrne, Senior Director, Finastra"] },
  { time: "11:00 AM", title: "Panel: Gaining New Customers in a Hyper Competitive World", speakers: ["Hamid Nirouzad – MD, Finastra", "Karim El Mourabet – Director, Finastra", "Ahmed Hamdy – Head of IT, Incolease", "Riham Muhammad – CEX Analyst, FABMISR", "Moderator: Siobhan Byron"] },
  { time: "11:30 AM", title: "Panel: Customer Retention – Keeping Customers When Loyalty Is Dying", speakers: ["Rudy Kawmi – MD, Finastra", "Heba Yehia – Head of Digital Products, AAIB", "Emad Shawky – CDAO, Banque Misr", "Moderator: Mohamed Elazzazy"] },
  { time: "12:00 PM", title: "Coffee Break & Networking", speakers: [] },
  { time: "12:30 PM", title: "Panel: Cost to Serve – Deliver Customer Delight", speakers: ["Narendra Mistry – Chief Product & Tech Officer, Finastra", "Siobhan Byron – EVP, Finastra", "Daragh O’Byrne – Senior Director, Finastra", "Moderator: Emad Shawky"] },
  { time: "01:00 PM", title: "The Essential Element: What do you need to be “all things to all people”?", speakers: ["Narendra Mistry, Finastra"] },
  { time: "01:30 PM", title: "Making the Case for Change: The Question is How", speakers: ["Marwan Abouzeid, Finastra"] },
  { time: "01:50 PM", title: "Closing Remarks", speakers: ["Rudy Kawmi, Finastra"] },
  { time: "02:00 PM", title: "Lunch", speakers: [] },
];

export default function Agenda() {
  return (
    <section className="relative bg-gradient-to-br from-[#1a0033] via-black to-[#0f0c29] py-20 px-6 text-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
      <motion.h2
  className="text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-yellow-300 mb-24"
  style={{
    fontSize: "56px",       // Equivalent to text-6xl
    lineHeight: "1.2",
    letterSpacing: "-0.02em"
  }}
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Agenda
</motion.h2>


        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-500 z-0"></div>

          <div className="space-y-16">
            {agenda.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center justify-between relative z-10 ${
                    isLeft ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full md:w-1/2 px-6">
                    <div className="rounded-xl p-6 border border-purple-300 bg-[#ffffff10] backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-600 hover:border-pink-400 hover:scale-[1.02]">
                      <p className="text-sm text-pink-300 font-medium mb-1">{item.time}</p>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      {item.speakers.length > 0 && (
                        <ul className="list-disc ml-5 text-sm text-gray-200 space-y-1">
                          {item.speakers.map((speaker, i) => (
                            <li key={i}>{speaker}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="w-0 md:w-1/12 flex justify-center items-center relative z-20">
                    <motion.div
                      className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 border-4 border-white shadow-lg"
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>

                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
