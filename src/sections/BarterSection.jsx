import React from "react";
import HorizontalGallery from "../components/HorizontalGallery";
import CardRenderer from "../renderer/CardRenderer";
import './BarterSection.style.css'

const BarterSection = ({ barterInformation }) => {
  return (
    <div className="barter-section flex flex-col">
      {barterInformation?.map((barterCategory) => (
        <div key={barterCategory.category} className="mb-7 flex flex-col justify-center"  id={`${barterCategory.key}`}>
          {/* Category Heading */}
          <h2 className="font-bold mb-4 text-gray-800 items-center m-auto
          underline-animation py-8 text-center text-6xl transition-all delay-300">
            {barterCategory.category}
          </h2>

          {/* Subcategories */}
          {barterCategory?.subCategory?.map((productInfo) => (
            <div key={productInfo.title} className="mb-4">
              {productInfo?.type === "slide" ? (
  <div className="flex flex-col gap-2.5 justify-center items-center mb-7">
    <h3 className="text-4xl product-title">
      {productInfo.title}
    </h3>
    <HorizontalGallery images={productInfo?.images} />
  </div>
) : productInfo?.type === "card" ? (
  <div className="flex flex-col gap-2.5 justify-center mb-7">
    <h3 className="text-4xl text-center product-title">
      {productInfo.title}
    </h3>
    <CardRenderer cardInfo={productInfo?.images} />
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
