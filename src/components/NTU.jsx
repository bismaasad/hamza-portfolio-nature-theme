// src/components/NTU.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const NTU = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    "/images/NTU/IMG-20250716-WA0024.jpg",
    "/images/NTU/IMG-20250716-WA0027.jpg",
    "/images/NTU/IMG-20250716-WA0030.jpg",
    "/images/NTU/IMG-20250716-WA0038.jpg",
    "/images/NTU/IMG-20250716-WA0040.jpg",
    "/images/NTU/IMG-20250716-WA0042.jpg",
    "/images/NTU/IMG-20250716-WA0044.jpg",
    "/images/NTU/IMG-20250716-WA0045.jpg",
    "/images/NTU/IMG-20250719-WA0001.jpg",
    "/images/NTU/IMG-20250719-WA0002.jpg",
    "/images/NTU/IMG-20250719-WA0003.jpg",
    "/images/NTU/IMG-20250719-WA0004.jpg",
    "/images/NTU/IMG-20250719-WA0005.jpg",
    "/images/NTU/IMG-20250719-WA0006.jpg",
    "/images/NTU/IMG-20250719-WA0007.jpg",
    "/images/NTU/WhatsApp Image 2025-07-18 at 08.35.02_9b79caf9.jpg",
    "/images/NTU/WhatsApp Image 2025-07-18 at 08.38.14_eeed3e11.jpg",
    "/images/NTU/WhatsApp Image 2025-07-18 at 08.43.01_12327ab2.jpg",

  ];
  const closeModal = () => setSelectedIndex(null);
  const showPrev = () => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const showNext = () => setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  return (
    <section id="ntu" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Life at NTU</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-20">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={img}
              alt={`NTU ${index + 1}`}
              className="rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 object-cover w-full h-64"
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button onClick={closeModal} className="absolute top-5 right-5 text-white hover:text-red-500">
            <X size={36} />
          </button>
          <button onClick={showPrev} className="absolute left-5 text-white hover:text-blue-400">
            <ChevronLeft size={40} />
          </button>
          <div className="bg-white rounded-xl p-4 max-w-[90vw] max-h-[90vh] shadow-2xl">
            <img src={images[selectedIndex]} alt="NTU View" className="w-[800px] h-[500px] object-cover rounded-lg" />
          </div>
          <button onClick={showNext} className="absolute right-5 text-white hover:text-blue-400">
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};

export default NTU;
