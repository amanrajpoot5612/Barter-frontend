import React, { useEffect, useState } from "react";
import HorizontalGallery from "../components/HorizontalGallery";
import CardRenderer from "../renderer/CardRenderer";
import './BarterSection.style.css'
import { backend_url_media } from "../config/config";

const BarterSection = ({ barterInformation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(`${backend_url_media}/image-page`)
      const images = await res.json();
      setData(images?.page);
    }
    fetchImages();
    // console.log("single data", dat?.title)
  }, [])


  return (
    <div className="barter-section flex flex-col">
      {data?.map((singleData) => (

        <div key={singleData?.key} className="mb-7 flex flex-col justify-center" id={`${singleData?.key}`}>
          {/* Category Heading */}

          <h2 className="font-bold mb-4 text-gray-800 items-center m-auto
          underline-animation py-8 text-center text-6xl transition-all delay-300">
            {singleData?.title}
          </h2>

          {/* Subcategories */}
          {singleData?.content?.map((collection) => (
            <div key={collection?.title} className="mb-4">
              {collection?.type === "slide" ? (
                <div className="flex flex-col gap-2.5 justify-center items-center mb-7">
                  <h3 className="text-4xl product-title">
                    {collection?.title}
                  </h3>
                  <HorizontalGallery images={collection?.media} />
                </div>
              ) : collection?.type === "card" ? (
                <div className="flex flex-col gap-2.5 justify-center mb-7">
                  <h3 className="text-4xl text-center product-title">
                    {collection?.title}
                  </h3>
                  <CardRenderer cardInfo={collection?.media} />
                </div>
              ) : null}

            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BarterSection;
