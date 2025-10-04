import React from "react";
import HorizontalGallery from "../components/HorizontalGallery";
import CardRenderer from "../renderer/CardRenderer";

const BarterSection = ({ barterInformation }) => {
  return (
    <div className="barter-section flex flex-col gap-12">
      {barterInformation?.map((barterCategory) => (
        <div key={barterCategory.category} className="mb-7"  id={`${barterCategory.key}`}>
          {/* Category Heading */}
          <h2 className="font-bold mb-4 text-gray-800 items-center m-auto text-center text-4xl">
            {barterCategory.category}
          </h2>

          {/* Subcategories */}
          {barterCategory?.subCategory?.map((productInfo) => (
            <div key={productInfo.title} className="mb-4">
              {productInfo?.type === "slide" ? (
                <div className="flex flex-col gap-2.5 justify-center items-center mb-7">
                <h3 className="text-4xl">
                  {productInfo.title}
                </h3>
                <HorizontalGallery images={productInfo?.images} />
                </div>
              ) : (
                <div className="flex flex-col gap-2.5 justify-center mb-7">
                <h3 className="text-4xl text-center">  
                  {productInfo.title}
                </h3>
                <CardRenderer cardInfo={productInfo?.images} />
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BarterSection;
