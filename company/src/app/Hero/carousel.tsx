"use client";

import React, { useState } from "react";

const carouselItems = [
  "https://a.storyblok.com/f/172398/1864x1048/c746201c53/global-time-tracking.png/m/filters:format(webp):quality(70)",
  "https://a.storyblok.com/f/172398/1864x1048/4aff0c8693/productivity-data.png/m/filters:format(webp):quality(70)",
  "https://a.storyblok.com/f/172398/1864x1048/6d4910d170/flexible-payroll.png/m/filters:format(webp):quality(70)",
  "https://a.storyblok.com/f/172398/1864x1048/ddef76f990/attendance-management.png/m/filters:format(webp):quality(70)",
  "https://a.storyblok.com/f/172398/1864x1048/45f123a952/project-cost-and-budgeting.png/m/filters:format(webp):quality(70)",
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  return (
    <div className="relative w-full h-[652px] mx-auto p-10 rounded-lg  " 
    >
      {/* Carousel Container */}
      <div className="relative h-full w-full overflow-hidden rounded-lg  ">
        {carouselItems.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute py-6  block w-full h-full top-0 left-0 object-cover transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Slider controls */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 -translate-y-1/2 left-[-14px] z-30 flex items-center justify-center w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 focus:outline-none"
      >
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 -translate-y-1/2 right-[-14px] z-30 flex items-center justify-center w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 focus:outline-none"
      >
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span className="sr-only">Next</span>
      </button>


      
    </div>
  );
}
