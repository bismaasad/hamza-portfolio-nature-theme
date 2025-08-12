// src/components/Gallery.jsx
import React, { useState } from "react";

export default function Gallery({ images = [] }) {
  // images: [{ thumb: '/images/a-thumb.jpg', large: '/images/a-large.jpg', alt: '...' }, ...]
  const [openIdx, setOpenIdx] = useState(-1);

  if (!images.length) {
    // placeholder
    images = [
      { thumb: "/images/image1.jpg", large: "/images/image1.jpg", alt: "image 1" },
      { thumb: "/images/image2.jpg", large: "/images/image2.jpg", alt: "image 2" },
      { thumb: "/images/image3.jpg", large: "/images/image3.jpg", alt: "image 3" },
    ];
  }

  return (
    <>
      <section id="gallery" className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button key={i} onClick={() => setOpenIdx(i)} className="group overflow-hidden rounded shadow-sm focus:outline-none">
              <img
                src={img.thumb}
                srcSet={`${img.thumb} 400w, ${img.large} 1200w`}
                sizes="(max-width: 640px) 100vw, 33vw"
                alt={img.alt || ""}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-200"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>

      {openIdx >= 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button onClick={() => setOpenIdx(-1)} className="absolute top-4 right-4 text-white text-3xl">×</button>

          <button
            onClick={() => setOpenIdx((openIdx - 1 + images.length) % images.length)}
            className="absolute left-4 text-white text-3xl"
            aria-label="previous"
          >
            ‹
          </button>

          <img
            src={images[openIdx].large}
            alt={images[openIdx].alt || ""}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded"
          />

          <button
            onClick={() => setOpenIdx((openIdx + 1) % images.length)}
            className="absolute right-4 text-white text-3xl"
            aria-label="next"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
