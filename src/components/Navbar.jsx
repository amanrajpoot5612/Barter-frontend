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
    <nav
      className="navbar-component fixed top-0 z-50 w-full bg-transparent shadow-md"
      id="navbar"
    >
      <div className="flex h-[55px] items-center justify-between rounded-b-2xl bg-black px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          {NavItems.find((item) => item.label === "Logo")?.icon && (
            <img
              src={NavItems.find((item) => item.label === "Logo")?.icon}
              alt="Logo"
              width={70}
              height={70}
              className="cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden gap-7 text-[16px] md:flex">
          {NavItems.filter((item) => item.key !== "logo").map((item) => (
            <li
              key={item.key}
              onClick={() => onClick(item.key)}
              className="text-gray-200 transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:font-medium hover:text-white hover:underline"
            >
              {/* <a href={item.key}> */}
              {item.icon ? null : item?.label}
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
              className="h-7 w-7 text-gray-700"
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
        <ul className="flex flex-col items-center gap-6 bg-white py-4 shadow-md md:hidden">
          {NavItems.filter((item) => item.key !== "logo").map((item) => (
            <li
              key={item.key}
              onClick={() => onClick(item.key)}
              className="text-gray-700 transition-all duration-300 hover:cursor-pointer hover:font-medium hover:text-blue-500 hover:underline"
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
