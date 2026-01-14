"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiEye } from "react-icons/fi";

const HeroCarousel = ({ slides = [] }) => {
  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id ?? index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto max-w-7xl px-6">
              <h1 className="max-w-2xl text-4xl font-bold text-white md:text-5xl">
                {slide.title}
              </h1>
              {slide.description && (
                <p className="my-4 max-w-xl text-lg text-gray-200">
                  {slide.description}
                </p>
              )}
              <button
                onClick={() => window.location.href = `/recipes/${slide.id}`}
                className="leading-none inline-flex items-center gap-2
                 rounded-2xl bg-[#ffcf60] px-4 py-2 text-sm font-medium text-black hover:cursor-pointer transition"
              >
                <FiEye className="text-xl" />
                <span>View Recipe</span>
              </button>
              {slide.cta && (
                <button className="mt-6 rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-200">
                  {slide.cta}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
