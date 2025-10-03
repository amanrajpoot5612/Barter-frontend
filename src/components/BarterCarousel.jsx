import React, { useState, useEffect } from "react";
import Demo1 from "../assets/Demo1.jpg";
import Demo2 from "../assets/Demo2.jpg";
import Demo3 from "../assets/Demo3.jpg";
import Demo4 from "../assets/Demo4.jpg";
import Demo5 from "../assets/Demo5.jpg";

const images = [Demo1, Demo2, Demo3, Demo4, Demo5];

const BarterCarousel = ({ interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(slide);
  }, [interval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      style={{
        width: "100vw",
        margin: "auto",
        position: "relative",
        overflow: "hidden",
        height: "250px", // fixed height for container
      }}
    >
      {/* Previous Button */}
      {/* <button
        onClick={goToPrevious}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        ❮
      </button> */}

      {/* Images Container */}
      <div
        style={{
          display: "flex",
          alignItems: "start",
          height: "100%",
          position: "relative",
        }}
      >
        {images.map((img, index) => {
          let offset = index - currentIndex;
          if (offset < 0) offset += images.length;

          let scale = 0.7;
          let zIndex = 1;
          let translateX = 0;

          if (offset === 0) {
            scale = 1;
            zIndex = 3;
            translateX = 0;
          } else if (offset === 1) {
            scale = 0.85;
            zIndex = 2;
            translateX = 300; // shift next image right
          } else if (offset === 2) {
            scale = 0.85;
            zIndex = 2;
            translateX = 600; // next-next image
          } else {
            translateX = 700; // push others out of view
          }
          
          return (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                width: "300px",
                
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
                transition: "transform 1s",
                zIndex: zIndex,
              }}
            />
          );
        })}
      </div>

      {/* Next Button */}
      {/* <button
        onClick={goToNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        ❯
      </button> */}
    </div>
  );
};

export default BarterCarousel;
