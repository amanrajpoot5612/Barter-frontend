import React, { useEffect, useRef, useState } from "react";
import ImageComponent from "../components/ImageComponent";

const Section = ({ SectionInfo }) => {
  const [expanded, setExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const textRef = useRef(null);

  const MAX_HEIGHT = 600; // px limit for text box

  useEffect(() => {
    if (textRef.current && textRef.current.scrollHeight > MAX_HEIGHT) {
      setShowReadMore(true);
    }
  }, [SectionInfo]);

  return (
    <>
      <span id="underline-container">
      <h2 className="underline-animation py-8 text-center text-6xl transition-all delay-300">
        {SectionInfo.title}
        
      </h2>
      </span>
    
    <div className="section-component bg-white flex justify-center items-center">
      {/* Title */}

      <div className="text-image-container flex flex-col md:flex-row p-6 bg-gradient-to-b from-gray-800 via-gray-600 to-gray-400 w-9/10 rounded-2xl  ">
        {/* Text Section */}
        <div
          ref={textRef}
          className={`text-content-component flex-1 relative transition-all duration-500 overflow-hidden`}
          style={{ maxHeight: expanded ? "none" : `${MAX_HEIGHT}px` }}
        >
          {SectionInfo?.preHeading ? (
            <h4 className="preheading">{SectionInfo.preHeading}</h4>
          ) : null}

          <h3 className="section-heading text-4xl font-extrabold text-white py-5">
            {SectionInfo.heading}
          </h3>

          <div className="description space-y-4 leading-relaxed text-gray-100 pb-5">
            {SectionInfo.sections.map((section, idx) =>
              section.type === "paragraphs" ? (
                <div key={idx} className="space-y-3 leading-relaxed">
                  {section.content.map((p, i) => (
                    <p key={i} className="sm:text-sm lg:text-base">
                      {p}
                    </p>
                  ))}
                </div>
              ) : section.type === "list" ? (
                <div key={idx} className="space-y-6">
                  {section.lists.map((list, i) => (
                    <div key={i}>
                      <h3 className="mb-2 text-xl font-semibold text-gray-800">
                        {list.title}
                      </h3>
                      <ul className="list-disc space-y-1 pl-6">
                        {list.items.map((item, j) => (
                          <li key={j} className="text-lg">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null
            )}
          </div>

          {/* Read More Button */}
          {showReadMore && (
            <div className="absolute bottom-0 left-0 right-0 text-center pt-12">
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-blue-600 font-semibold hover:underline"
              >
                {expanded ? "Read Less" : "Read More"}
              </button>
            </div>
          )}
        </div>

        {/* Image Section */}
        <div className="image-component flex flex-1 items-center justify-center rounded-2xl">
          <ImageComponent imageInfo={SectionInfo.imageInfo} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Section;
