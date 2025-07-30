// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ active, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-mountain text-white px-4 py-5 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Heading with responsive left padding */}
        <h1 className="text-xl font-bold pl-4 md:pl-8 lg:pl-0">
          Dr. Hamza Khan
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`hover:text-sunrise transition duration-200 ${
                  active === item.id ? "border-b-2 border-sunrise pb-1" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-mountain">
          <div className="max-w-6xl mx-auto px-4 pt-4 pb-2 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMenuOpen(false); // close menu on selection
                }}
                className={`block w-full text-left text-sm hover:text-sunrise transition duration-200 ${
                  active === item.id
                    ? "border-l-4 border-sunrise pl-4"
                    : "pl-4"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
