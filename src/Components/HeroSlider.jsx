import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import kids from "../assets/slideImg/kids.jpg";
import reduceViolence from '../assets/slideImg/reducingViolence.webp';
import feedHungry from '../assets/slideImg/feed.jpeg';
import women from '../assets/slideImg/women.webp';
import children from '../assets/slideImg/children.jpeg';

const HeroSlider = () => {
  const slides = [
    { id: 1, image: reduceViolence, title: 'Together, We Can End Violence Against Women' },
    { id: 2, image: kids, title: 'Back to School: Transforming Young Lives' },
    { id: 3, image: women, title: 'Advocating for Human Rights for All' },
    { id: 4, image: feedHungry, title: 'Feeding Hope: Supporting Those in Need' },
    { id: 5, image: children, title: "Protecting Children's Rights for a Better Future" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative mt-[3rem] overflow-hidden" style={{ aspectRatio: '16/9' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-5">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white text-3xl md:text-6xl font-bold text-center"
            >
              {slides[currentSlide].title}
            </motion.h1>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition"
      >
        &#10095;
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            } cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
