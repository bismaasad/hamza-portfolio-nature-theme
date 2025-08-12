// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";

function App() {
  // prepare images array or keep default
  const images = [
    { thumb: "/images/image1.jpg", large: "/images/image1.jpg", alt: "1" },
    { thumb: "/images/image2.jpg", large: "/images/image2.jpg", alt: "2" },
    { thumb: "/images/image3.jpg", large: "/images/image3.jpg", alt: "3" },
  ];

  return (
    <div className="bg-stone text-gray-900 font-sans min-h-screen">
      <Navbar />
      <Hero />
      {/* Example About section placeholder */}
      <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <p className="text-gray-700">Add your about text here. This section is responsive and will display nicely on mobile.</p>
      </section>

      <Gallery images={images} />

      <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700">Contact details and form go here.</p>
      </section>
    </div>
  );
}

export default App;
