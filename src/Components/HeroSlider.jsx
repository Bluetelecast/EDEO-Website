import React, { useState, useEffect } from 'react';
import kids from "../assets/slideImg/kids.jpg"
import reduceViolence from '../assets/slideImg/reducingViolence.webp'
import feedHungry from '../assets/slideImg/feed.jpeg'
import women from '../assets/slideImg/women.webp'
import children from '../assets/slideImg/children.jpeg'




const HeroSlider = () => {
    
    const [slides,setSlides] = useState(
        [
            { id: 1, image: reduceViolence, title: 'Reducing Violence Against Women' },
            { id: 2, image: kids, title: 'Turning Kids Back to School' },
            { id: 3, image: women, title: 'Human Rights Promotion' },
            { id: 4, image: feedHungry, title: 'Feed the helpless' },
            { id: 4, image: children, title: 'Children Rights' },
          ]
    ) ;

    const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
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
    <div className="relative mt-[3rem]" style={{aspectRatio:'16/9'}}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-5">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center">{slide.title}</h1>
          </div>
        </div>
      ))}


      <button
        onClick={prevSlide}
        className="absolute top-1/2 cursor-pointer left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 cursor-pointer right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
      >
        &#10095;
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
