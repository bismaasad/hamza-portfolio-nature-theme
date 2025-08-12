// src/components/Navbar.jsx
import React, { useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "gallery", label: "Gallery" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleNavClick = (id) => {
    setActive(id);
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="bg-mountain text-white sticky top-0 z-40 shadow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-lg font-bold">Dr. Hamza Khan</div>
            <div className="hidden md:block ml-10">
              <ul className="flex space-x-6">
                {links.map((l) => (
                  <li key={l.id}>
                    <button
                      onClick={() => handleNavClick(l.id)}
                      className={`px-1 py-2 text-sm focus:outline-none ${
                        active === l.id ? "border-b-2 border-sunrise" : "opacity-90 hover:opacity-100"
                      }`}
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sunrise"
            >
              {open ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-mountain/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => handleNavClick(l.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  active === l.id ? "bg-sunrise/20" : "hover:bg-white/5"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
