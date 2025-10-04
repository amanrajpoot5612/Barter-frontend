import React from 'react';
import { Carousel } from 'antd';
import { Demo1, Demo2, Demo3, Demo4 } from '../importer/importer.js';

const images = [Demo1, Demo2, Demo3, Demo4];

const MainCarousel = () => {
  return (
    <div className="main-carousel w-full max-w-4xl mx-auto min-h-[400px]">
      <Carousel
        arrows
        infinite
        autoplay
        autoplaySpeed={2000}
        draggable
        fade
        
      >
        {images.map((img, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={img}
              alt={`Carousel ${index + 1}`}
              className="w-full h-[400px] object-contain"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
