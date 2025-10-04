import React from "react";
import "./GallerySlider.style.css";

const GallerySlider = () => {
  const items = [1, 2, 3, 4, 5];

  return (
    <div className="gallery-wrapper">
      <div className="gallery-track">
        {items.map((num) => {
          return (
            <div className="flex">
              <div className={`gallery-child gallery-child${num}`}>{num}</div>
            </div>
          );
        })}
        {items.map((num, idx) => (
          <div className="flex" key={`second-${idx}`}>
            <div className={`gallery-child gallery-child${num}`}>{num}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySlider;
