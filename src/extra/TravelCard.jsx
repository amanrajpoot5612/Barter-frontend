import React from "react";

const TravelCard = ({ cardInfo }) => {
  return (
    <div className="images-card group relative w-[250px] rounded-xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-lg border-white/20 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 border-4">
      {/* Image */}
      <img
        src={cardInfo.url}
        className="w-full h-[350px] object-fill"
        alt={cardInfo.title || "Travel Destination"}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Favorite icon (top-right) */}
      <div className="absolute top-3 right-3 bg-white/20 p-2 rounded-full backdrop-blur-md cursor-pointer hover:bg-white/40 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.657 0-3.156.895-4 2.25-0.844-1.355-2.343-2.25-4-2.25-2.761 0-5 2.015-5 4.5 0 7.5 9 11.25 9 11.25s9-3.75 9-11.25z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-5 text-white w-full">
        {/* Hidden button that shows on hover */}
        <button className="mt-4 w-full bg-white text-black font-medium py-2 px-4 rounded-full shadow opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          View more...
        </button>
      </div>
    </div>
  );
};

export default TravelCard;
