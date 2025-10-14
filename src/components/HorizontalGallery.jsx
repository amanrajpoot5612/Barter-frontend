import React, { useEffect, useRef, useState } from 'react';

const HorizontalGallery = ({ images = [], speed = 2 }) => {
  const containerRef = useRef(null);
  const [direction, setDirection] = useState(-1);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    let animationFrame;

    const scroll = () => {
      setPosition((prev) => {
        let next = prev + direction * speed;
        if (!containerRef.current) return prev;
        if (next <= -containerRef.current.scrollWidth / 2) next = 0;
        else if (next >= 0) next = -containerRef.current.scrollWidth / 2;
        return next;
      });
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrame);
  }, [direction, speed]);

  if (!images || !Array.isArray(images) || images.length === 0) return null;

  return (
    <div
      className="relative w-9/10 overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 via-gray-600 to-gray-400"
      onMouseEnter={() => setDirection(1)}
      onMouseLeave={() => setDirection(-1)}
    >
      <div
        ref={containerRef}
        className="wrapper flex rounded-2xl whitespace-nowrap"
        style={{ transform: `translateX(${position}px)` }}
      >
        {[...images, ...images].map((img, index) => (
          <div
            key={index}
            className="mx-2 h-48 w-48 flex flex-shrink-0 overflow-hidden object-cover rounded-xl items-center justify-center"
          >
            <img
              src={img.url}
              alt={img.name || `gallery-${index}`}
              className="h-1/2 w-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalGallery;
