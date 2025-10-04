import React from "react";
import Navbar from "./components/Navbar";
import SectionRenderer from "./renderer/SectionRenderer";
import BarterCarousel from "./components/BarterCarousel";
import ImageComponent from "./components/ImageComponent";
// import { NavItems } from './importer/importer.jsx'
import CardRenderer from "./renderer/CardRenderer";
import BarterSection from "./sections/BarterSection";
import { barterInfo } from "./importer/barterImporter";
import TravelCard from "./extra/TravelCard";
import GallerySlider from "./components/GallerySlider";
import { EntertainmentImages } from "./importer/imageImporter";
import FooterRenderer from "./renderer/FooterRenderer";
import TestimonialRenderer from "./renderer/TestimonialRenderer";
import NavbarRenderer from "./renderer/NavbarRenderer";

const App = () => {
  const images = [
    "https://picsum.photos/id/1018/400/500",
    "https://picsum.photos/id/1020/400/500",
    "https://picsum.photos/id/1024/400/500",
    "https://picsum.photos/id/1035/400/500",
  ];
  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-100">
    //   <GallerySlider/>

    // </div>
    <div className="app-container flex min-h-screen flex-col">
        
      <NavbarRenderer></NavbarRenderer>
      <SectionRenderer></SectionRenderer>
      <BarterSection barterInformation={barterInfo}></BarterSection>
      <TestimonialRenderer></TestimonialRenderer>
      <FooterRenderer></FooterRenderer>
    </div>
  );
};

export default App;
