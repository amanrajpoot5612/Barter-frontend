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
    <div className="section-component">
      {/* Title */}
      <h2 className="py-8 text-center text-6xl hover:underline decoration-pink-300 transition-all delay-300">
        {SectionInfo.title}
      </h2>

      <div className="text-image-container flex flex-col md:flex-row gap-8">
        {/* Text Section */}
        <div
          ref={textRef}
          className={`text-content-component flex-1 p-6 relative transition-all duration-500 overflow-hidden`}
          style={{ maxHeight: expanded ? "none" : `${MAX_HEIGHT}px` }}
        >
          {SectionInfo?.preHeading ? (
            <h4 className="preheading">{SectionInfo.preHeading}</h4>
          ) : null}

          <h3 className="heading text-4xl font-extrabold text-gray-800">
            {SectionInfo.heading}
          </h3>

          <div className="description space-y-4 leading-relaxed text-gray-700">
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
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent text-center pt-12">
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
        <div className="image-component flex flex-1 items-center justify-center rounded-2xl bg-gray-100 px-7">
          <ImageComponent imageInfo={SectionInfo.imageInfo} />
        </div>
      </div>
    </div>
  );
};

export default Section;
