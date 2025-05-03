import React from "react";
import { FaLinkedin, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-14 pb-10 relative z-10 text-sm">
      {/* Gradient Top Line */}
      <div className="h-1 w-full bg-gradient-to-r from-fuchsia-600 via-pink-500 to-yellow-400 mb-12" />

      {/* Grid Content */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Cogent Solutions™</h3>
          <p className="text-gray-400 leading-relaxed text-base">
            Through our conferences we transform business challenges into opportunities. 
            Our clients include leading government entities and Fortune 500 companies.
          </p>

          <div className="mt-6">
            <h4 className="text-base font-semibold mb-3 text-pink-400">Awards</h4>
            <div className="flex flex-wrap gap-3">
              {["A1.png", "A2.png", "A3.png", "A4.png"].map((src, i) => (
                <img
                  key={i}
                  src={`/${src}`}
                  alt={`Award ${i + 1}`}
                  className="h-20 w-auto object-contain rounded-md border border-gray-700 shadow-md"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Our Office</h3>
          <ul className="space-y-3 text-gray-400 text-base">
            <li>
              <span className="text-white font-medium">Middle East & Africa HQ:</span><br />
              Office 209, The Metropolis Tower, Business Bay, Dubai, UAE
            </li>
            <li>
              <span className="text-white font-medium">Asia Pacific HQ:</span><br />
              7th Floor Green Lanka Tower, Colombo, Sri Lanka
            </li>
            <li>
              <span className="text-white font-medium">Saudi Arabia HQ:</span><br />
              Riyadh, Saudi Arabia
            </li>
            <li>
              📞 +971 50 5718867
            </li>
            <li>
              📧 <a href="mailto:partnerships@cogentsolutions.ae" className="text-pink-400 hover:underline">partnerships@cogentsolutions.ae</a>
            </li>
          </ul>
        </div>

        {/* Socials & Copyright */}
        <div className="flex flex-col justify-between items-start lg:items-end">
          <div className="flex space-x-4 mb-6 lg:mb-0">
            {[FaLinkedin, FaFacebookF, FaInstagram, FaTwitter].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 p-[2px] rounded-full"
              >
                <div className="bg-black p-3 rounded-full hover:bg-gray-900 transition">
                  <Icon className="text-white text-lg" />
                </div>
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-6 text-center lg:text-right">
            © 2025 Cogent Solutions Event Management LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
