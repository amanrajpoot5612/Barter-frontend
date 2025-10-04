import React from "react";
import { Routes, Route } from "react-router-dom";

import NavbarRenderer from "./renderer/NavbarRenderer";
import SectionRenderer from "./renderer/SectionRenderer";
import BarterSection from "./sections/BarterSection";
import { barterInfo } from "./importer/barterImporter";
import TestimonialRenderer from "./renderer/TestimonialRenderer";
import FooterRenderer from "./renderer/FooterRenderer";

// Dummy pages for routing
const Home = () => (
  <>
    <NavbarRenderer />
    <SectionRenderer />
    <BarterSection barterInformation={barterInfo} />
    <TestimonialRenderer />
    <FooterRenderer />
  </>
);

const About = () => <h1 className="text-3xl text-center mt-10">About Page</h1>;
const Services = () => <h1 className="text-3xl text-center mt-10">Services Page</h1>;
const Contact = () => <h1 className="text-3xl text-center mt-10">Contact Page</h1>;

const App = () => {
  return (
    <div className="app-container flex min-h-screen flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
