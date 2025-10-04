import React from "react";
import MainCarousel from "../components/MainCarousel";
import ActionButton from "../components/ActionButton";
// import ArrowRight from "./src/assets/icons/arrow-right.svg";
// import ArrowRight from "../assets/icons/arrow-right.svg";

const hero = {
  title: "Welcome to Barter",
  description:
    "Trade your items with ease and connect with others in your community.",
  buttonText: "Get Started",
};

const Home = () => {
  return (
    <div className="home-component flex min-h-[calc(100vh-45px)] items-center justify-between bg-gradient-to-r from-pink-200 via-pink-100 px-12 w-full" id="home">
      {/* Left: Hero Section */}
      <div className="hero flex-1 pr-8">
        <h1 className="mb-6 text-5xl leading-tight font-extrabold text-[var(--color-primary-dark)]">
          {hero.title}
        </h1>
        <p className="mb-10 max-w-md text-lg text-black">
          {hero.description}
        </p>
        <div className="button-component">
          <ActionButton buttonText={hero.buttonText}></ActionButton>
        </div>
      </div>

      {/* Right: Carousel */}
      <div className="main-carousel flex flex-1 justify-center">
        <MainCarousel></MainCarousel>
      </div>
    </div>
  );
};

export default Home;
