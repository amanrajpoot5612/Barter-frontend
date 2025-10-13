import React, { useEffect, useState } from 'react';
import Testimonials from '../sections/Testimonials';
import TestimonialCard from '../components/TestimonialCard';
import { Demo1 } from '../importer/importer';
// import { testimonialInfo } from "../importer/testimonial";
import {backend_url} from '../config/config.js';

const TestimonialRenderer = () => {
  const [loading, setLoading] = useState(true);
  const [testimonial, setTestimonial] = useState(null);

  useEffect(() => {
    const fetchTestimonial = async (req, res) => {
      try {
        const res = await fetch(`${backend_url}/get-testimonial`);
        const data = await res.json();
        if(data?._id){
          setTestimonial(data);
        }else {
          console.error("Failed to fetch testimonial:", data.message);
        }
        // console.log(data);
        
        setLoading(false);
      } catch (error) {
        console.error(error);
        setTestimonial(null);
        setLoading(false);
      }
    };
    fetchTestimonial();
  }, []);

  if (loading) return
<h3>Component loading</h3>

if (!testimonial) return <p>No testimonials found</p>
  return (
    <>
      <h3
        className="product-title text-center text-5xl"
        id="clienttestimonials"
      >
        Client Testinomial
      </h3>
      <div className="m-auto flex w-9/10 flex-wrap items-center justify-center gap-15 rounded-2xl bg-gray-100 p-5 pt-11 sm:text-[16px]">
        <TestimonialCard testimonialInfo={testimonial.items}></TestimonialCard>
      </div>
    </>
  );
};

export default TestimonialRenderer;
