import React from 'react';
import { Carousel } from 'antd';
import { Demo1, Demo2, Demo3, Demo4 } from '../importer/importer.js';

const images = [Demo1, Demo2, Demo3, Demo4];

const MainCarousel = ({images}) => {
  return (
    <div className="main-carousel w-9/10 max-w-4xl mx-auto">
      <Carousel
        arrows
        infinite
        autoplay
        autoplaySpeed={1000}
        draggable
        fade
        adaptiveHeight={true}
      >
        {images?.map((img, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={img}
              alt={`Carousel ${index + 1}`}
              className="w-full object-contain rounded-2xl fade-corners"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
