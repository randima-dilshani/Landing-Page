import React from "react";
import { Button } from "../ui/button";
export default function EventOverview() {
    return (
      <section
        id="overview"
        className="bg-gradient-to-br from-[#1a0033] via-black to-[#0f0c29] px-6 py-20 text-white text-center"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-6">
            Event Overview
          </h2>
          <p className="text-lg leading-8">
            Join us on <strong>April 9th in Cairo, Egypt</strong>, for Finastra's Universal Banking Forum,
            <em> "Reimagine Banking: Adapt. Evolve. Thrive."</em> This exclusive event is designed to help
            you navigate and excel in the rapidly evolving banking landscape.
          </p>
          <p className="text-lg leading-8 mt-6">
            Our forum will bring together business and technology experts, industry leaders, and visionaries
            to share their insights on the latest trends and challenges in the banking sector. You'll gain
            valuable knowledge on topics such as <strong>Generative AI</strong>, the impact of volatility,
            globalization challenges, persistent supply chain issues, recession threats, shifts in
            competitive dynamics, and evolving regulations.
          </p>
          <p className="text-lg leading-8 mt-6">
            Each session will delve into the implications, challenges, and opportunities these topics present,
            providing you with practical strategies to leverage the latest technologies and capitalize on
            emerging opportunities. This is a unique chance to learn from the best in the industry, stay ahead
            of the curve, and connect with fellow retail banking professionals.
          </p>
          <p className="text-lg leading-8 mt-6">
            <strong>Don't miss this opportunity</strong> to enhance your knowledge, skills, and network in the
            finance and banking sector. <span className="text-pink-400 font-semibold">Register today</span> and
            secure your place at this must-attend event!
          </p>
        </div>
      </section>
    );
  }
  