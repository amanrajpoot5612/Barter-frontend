import React, { useEffect } from "react";
import "../index.css"; // we'll define CSS below

const Loader = () => {
  useEffect(() => {
    const loader = document.querySelector(".loader");
    const content = document.querySelector(".content");

    // Trigger door-opening animation after page loads
    window.addEventListener("load", () => {
      loader.classList.add("open");

      setTimeout(() => {
        loader.style.display = "none";
        document.body.style.overflow = "auto";
        content.classList.add("visible");
      }, 1500); // same as transition duration
    });
  }, []);

  return (
    <div className="app">
      {/* Loader section */}
      <div className="loader">
        <div className="upper"></div>
        <div className="lower"></div>
      </div>

      {/* Website content */}
      <div className="content">
        <h1>Your Website</h1>
        <p>This content appears after the sliding doors open.</p>
      </div>
    </div>
  );
};

export default Loader;
