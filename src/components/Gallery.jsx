// src/components/Gallery.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    "https://visitgilgitbaltistan.gov.pk/storage/images/1BzZ0ypjCcwVXHa0uXqjRkgExxri4W-metaUGhhbmRhci1WYWxsZXkxMTExLmpwZyB3Yi5qcGc=-.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR254IQiUFCnMB-qRWJ1239aCgxj_f-QfdHsQ&s",
    "https://i0.wp.com/pamirtimes.net/wp-content/uploads/2017/02/Punial.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CNByVYK3xpbcfOH0IIPbJaEMfpNuuXEQRA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQ6QLBetn85LzQqC6t-canMVC-0l0LplphQiGcz5EnRTwZhwLsZuGYIQAGIYrAs3-quQ&usqp=CAU",
    "https://www.youlinmagazine.com/articles/2212.jpg",
    "https://www.apricottours.pk/wp-content/uploads/2017/03/phander-lake-ghizer-gilgit-baltistan-10.jpg",
    "https://www.shutterstock.com/shutterstock/videos/3483070551/thumb/1.jpg?ip=x480",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFfLBokvZspzkOYG3m8Hmv09OWWwX7a2Vu2w&s",
    "https://i.pinimg.com/736x/77/a6/90/77a6909b5383171f980fc348eaf5b435.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsjMCA6vd4mWLD_tk4DG3Gx0HaXHJ6caUhgA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNun8wY4xFVxgdCMQAkt5JZ0iF4dWcGi6uQDYARD2w3Pxu3voWKC3Yh__GJ3OzjZ6g8XY&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8l2uzcqoC5P-3o2f8Tlfijr3kswnHFkbwh2ZEYdeHdgEd-BjAhhraaM7ZgBc-RQQWwg&usqp=CAU",
    "https://tripako.com/wp-content/uploads/2020/12/Phandar-3-300x300.jpg",
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRiPf3JqhXSMQ-N63R5dzbgjlWExP4p3MGV3qw-PpcTyQi7JNRm",
    "https://vepakistan.com/wp-content/uploads/2015/01/phander-valley-view-summer.jpg",
    "https://www.gonomad.com/wp-content/uploads/2020/01/Three-men-and-a-cow-hanging-out-on-a-bridge-in-Phander-Samantha-Shea.jpg",
    "https://mytrip.pk/storage/images/dest_mod-62e78332e13ab1659339570.webp"
  ];

  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const showNext = () =>
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Phander Ghizer Gilgit</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-20">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={img}
              alt={`Gilgit View ${index + 1}`}
              className="rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 object-cover w-full h-64"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white hover:text-red-500 transition"
          >
            <X size={36} />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-5 text-white hover:text-blue-400 transition"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="bg-white rounded-xl p-4 max-w-[90vw] max-h-[90vh] flex items-center justify-center shadow-2xl">
            <img
              src={images[selectedIndex]}
              alt="Enlarged View"
              className="w-[800px] h-[500px] object-cover rounded-lg"
            />
          </div>

          <button
            onClick={showNext}
            className="absolute right-5 text-white hover:text-blue-400 transition"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
