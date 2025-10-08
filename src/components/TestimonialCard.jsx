import React, { useState } from "react";
import './Testimonial.style.css'

const TestimonialCard = ({ testimonialInfo }) => {
  return (
    <>
      {testimonialInfo.map((testimonial, idx) => (
        <ExpandableCard key={idx} testimonial={testimonial} />
      ))}
    </>
  );
};

// Separate card component with expand/collapse feature
const ExpandableCard = ({ testimonial }) => {
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = 100; // chars to show before "Read more"

  const toggleExpand = () => setExpanded(!expanded);

  // Decide what text to show
  const displayText =
    expanded || testimonial.para.length <= MAX_LENGTH
      ? testimonial.para
      : testimonial.para.slice(0, MAX_LENGTH) + "...";

  return (
    <div className="testimonial-card w-[60%] flex-col justify-start bg-white p-4 shadow sm:w-[80%] md:w-1/3 lg:w-1/4">
      <img src={testimonial.img} alt="" className="rounded mb-3" />
      <h3 className="text-2xl font-semibold mb-2">{testimonial.heading}</h3>

      <p className="text-gray-700 testimonial-info">
        {displayText}
        {testimonial.para.length > MAX_LENGTH && (
          <button
            onClick={toggleExpand}
            className="ml-2 text-blue-500 font-medium hover:underline"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </p>
    </div>
  );
};

export default TestimonialCard;
