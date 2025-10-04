import React, { useEffect, useRef, useState } from 'react';

const HorizontalGallery = ({ images = [], speed = 0.5 }) => {
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
      className="overflow-hidden w-full relative bg-gradient-to-r from-[var(--color-background-light)] to-[var(--color-background-dark)]"
      onMouseEnter={() => setDirection(1)}
      onMouseLeave={() => setDirection(-1)}
    >
      <div
        ref={containerRef}
        className="flex whitespace-nowrap"
        style={{ transform: `translateX(${position}px)` }}
      >
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img.img} // make sure this property exists!
            alt={img.name || `gallery-${index}`}
            className="w-48 h-48 object-contain mx-2 flex-shrink-0"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};


export default HorizontalGallery;
