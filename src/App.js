import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import NTU from "./components/NTU";
import Footer from "./components/Footer";

// ✅ Import backend test component
import TestBackend from "./components/TestBackend";

function App() {
  const [visibleSection, setVisibleSection] = useState("home");

  const handleNavigation = (section) => {
    setVisibleSection(section);
    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800 scroll-smooth flex flex-col min-h-screen">
      {/* ✅ Navbar always on top */}
      <Navbar active={visibleSection} onNavigate={handleNavigation} />

      {/* ✅ Main Content */}
      <div className="pt-16 flex-grow">
        {visibleSection === "home" && (
          <>
            <Hero />
            <section id="gallery"><Gallery /></section>
            <section id="ntu"><NTU /></section>

            {/* ✅ Show backend connection test below hero */}
            <section className="my-8">
              <TestBackend />
            </section>
          </>
        )}

        {visibleSection === "about" && (
          <section id="about"><About /></section>
        )}

        {visibleSection === "education" && (
          <section id="education"><Education /></section>
        )}

        {visibleSection === "experience" && (
          <section id="experience"><Experience /></section>
        )}

        {visibleSection === "publications" && (
          <section id="publications"><Publications /></section>
        )}

        {visibleSection === "contact" && (
          <section id="contact"><Contact /></section>
        )}
      </div>

      {/* ✅ Footer always at bottom */}
      <Footer />
    </div>
  );
}

export default App;
