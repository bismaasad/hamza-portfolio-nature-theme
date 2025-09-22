import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-r from-river to-sunrise text-white py-16 px-6 text-center"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* LEFT SECTION - IMAGE & TEXT */}
          <div className="md:w-1/2 flex flex-col items-center">
            <img
              src="/images/hamza.jpg"
              alt="Dr. Hamza Khan"
              className="w-60 h-72 object-cover rounded-xl shadow-lg border-4 border-white"
            />
            <div className="mt-4 text-center">
              <h1 className="text-4xl font-bold">Dr. Hamza Khan</h1>
              <p className="mt-2 text-xl">PhD in Mathematical Sciences</p>
              <p className="text-base mt-1">
                Applied Mathematics | Control Theory | Computational Fluid Dynamics | Fractional Modeling
              </p>
            </div>
          </div>

          {/* RIGHT SECTION - IMAGE SLIDER */}
          <div className="md:w-[52%] w-full rounded-xl overflow-hidden shadow-2xl">
            <Slider {...settings}>
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-[420px] object-cover"
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
