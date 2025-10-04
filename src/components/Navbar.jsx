import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ NavItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = (key) => {
    const section = document.getElementById(key);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu after click
  };

  return (
    <nav className="navbar-component fixed top-0 bg-white shadow-md z-50 w-full" id="navbar">
      <div className="flex justify-between items-center h-[55px] px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          {NavItems.find((item) => item.key === "logo")?.icon && (
            <img
              src={NavItems.find((item) => item.key === "logo")?.icon}
              alt="Logo"
              width={70}
              height={70}
              className="cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-[18px] gap-7">
          {NavItems.filter((item) => item.key !== "logo").map((item) => (
            <li
              key={item.key}
              onClick={() => onClick(item.key)}
              className="hover:underline hover:text-blue-500 hover:font-medium hover:cursor-pointer hover:scale-110 transition-all duration-300 text-gray-700"
            >
              {/* <a href={item.key}> */}
              {item.label}
              {/* </a> */}
            </li>
          ))}
        </ul>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-4 bg-white shadow-md">
          {NavItems.filter((item) => item.key !== "logo").map((item) => (
            <li
              key={item.key}
              onClick={() => onClick(item.key)}
              className="hover:underline hover:text-blue-500 hover:font-medium hover:cursor-pointer transition-all duration-300 text-gray-700"
            >
              {/* <a href={item.key}> */}
              {item.label}
              {/* </a> */}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
