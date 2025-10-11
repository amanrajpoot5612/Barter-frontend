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

  console.log("sectionInfo", SectionInfo);
  console.log("SectionInfo?.section?.heading", SectionInfo?.section?.heading);
  

  return (
    <>
      <span id="underline-container">
      <h2 className="underline-animation py-8 text-center text-6xl transition-all delay-300">
        {SectionInfo.name}
        
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
          {SectionInfo?.section?.preHeading ? (
            <h4 className="preheading text-3xl font-extrabold text-white">{SectionInfo.section.preHeading}</h4>
          ) : null}

          <h3 className="section-heading text-4xl font-extrabold text-white py-5">
            {SectionInfo?.section?.heading}
          </h3>

          <div className="description space-y-4 leading-relaxed text-gray-100 pb-5">
  {/* Paragraphs */}
  {SectionInfo?.section?.description?.paragraphs?.map((p, idx) => (
    <div key={idx} className="space-y-3 leading-relaxed">
      <p className="sm:text-sm lg:text-base">{p}</p>
    </div>
  ))}

  {/* Lists */}
  {SectionInfo?.section?.description?.list?.length > 0 && (
    <div className="space-y-6">
      {SectionInfo.section.description.list.map((list, i) => (
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
          {/* {console.log("SectionInfo?.section?.imageURL[0]", SectionInfo?.section?.imageURL[0])} */}
          <ImageComponent imageInfo={SectionInfo?.section?.description?.imageURL} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Section;
