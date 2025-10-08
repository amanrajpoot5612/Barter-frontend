import React from "react";
import Testimonials from "../sections/Testimonials";
import TestimonialCard from "../components/TestimonialCard";
import { Demo1 } from "../importer/importer";
import { testimonialInfo } from "../importer/testimonial";


const TestimonialRenderer = () => {
  return (
    <>
      <h3 className="text-center text-5xl product-title" id="clienttestimonials">Client Testinomial</h3>
      <div className="m-auto flex w-9/10 flex-wrap items-center justify-center gap-15 rounded-2xl bg-gray-100 p-5 pt-11 sm:text-[16px]">
        <TestimonialCard testimonialInfo={testimonialInfo}></TestimonialCard>
      </div>
    </>
  );
};

export default TestimonialRenderer;
