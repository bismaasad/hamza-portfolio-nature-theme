import React from "react";
import { FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-river to-sunrise text-white -mt-24">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Small screen layout */}
        <div className="block md:hidden space-y-6">
          {/* Top: Personal Info */}
          <div>
            <h2 className="text-xl font-bold">Dr. Hamza Khan</h2>
            <p className="mt-1 text-sm leading-snug text-white/90">
              PhD in Mathematical Sciences <br />
              Applied Mathematics | Control Theory | Computational Fluid Dynamics | Fractional Modeling
            </p>
          </div>

          {/* Quick Links + Connect in one row */}
          <div className="flex justify-between gap-6">
            {/* Quick Links */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1 text-sm text-white/90">
                <li><a href="#home" className="hover:text-yellow-200 transition">Home</a></li>
                <li><a href="#about" className="hover:text-yellow-200 transition">About</a></li>
                <li><a href="#education" className="hover:text-yellow-200 transition">Education</a></li>
                <li><a href="#experience" className="hover:text-yellow-200 transition">Experience</a></li>
                <li><a href="#publications" className="hover:text-yellow-200 transition">Publications</a></li>
                <li><a href="#contact" className="hover:text-yellow-200 transition">Contact</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Connect</h3>
              <div className="flex gap-3">
                <a
                  href="mailto:ameer.hamza22@gmail.com"
                  title="Email"
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition duration-200 ease-in-out"
                >
                  <FaEnvelope size={18} />
                </a>
                <a
                  href="tel:+923333032982"
                  title="Call"
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition duration-200 ease-in-out"
                >
                  <FaPhone size={18} />
                </a>
                <a
                  href="https://www.facebook.com/share/1BcHcNK92H/"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition duration-200 ease-in-out"
                >
                  <FaFacebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Large screen layout */}
        <div className="hidden md:grid grid-cols-3 gap-6 items-start">
          {/* Left: Personal Info */}
          <div>
            <h2 className="text-xl font-bold">Dr. Hamza Khan</h2>
            <p className="mt-1 text-sm leading-snug text-white/90">
              PhD in Mathematical Sciences <br />
              Applied Mathematics | Control Theory | Computational Fluid Dynamics | Fractional Modeling
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-col md:items-center">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm text-white/90">
              <li><a href="#home" className="hover:text-yellow-200 transition">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-200 transition">About</a></li>
              <li><a href="#education" className="hover:text-yellow-200 transition">Education</a></li>
              <li><a href="#experience" className="hover:text-yellow-200 transition">Experience</a></li>
              <li><a href="#publications" className="hover:text-yellow-200 transition">Publications</a></li>
              <li><a href="#contact" className="hover:text-yellow-200 transition">Contact</a></li>
            </ul>
          </div>

          {/* Right: Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <div className="flex gap-3">
              <a
                href="mailto:ameer.hamza22@gmail.com"
                title="Email"
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition duration-200 ease-in-out"
              >
                <FaEnvelope size={18} />
              </a>
              <a
                href="tel:+923333032982"
                title="Call"
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition duration-200 ease-in-out"
              >
                <FaPhone size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1BcHcNK92H/"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition duration-200 ease-in-out"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar (Always Visible) */}
      <div className="bg-black/20 py-3 text-center text-xs text-white/80">
        © {new Date().getFullYear()} Dr. Hamza Khan | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;