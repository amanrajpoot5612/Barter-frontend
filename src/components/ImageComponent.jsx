import React from "react";
import { Image } from "antd";

const ImageComponent = ({imageInfo}) => {

  return (
      <Image.PreviewGroup>
        {imageInfo.items.map((img, idx) => (
          <Image
            key={idx}
            width={"80%"}          // or "100%" depending on design
            style={{ borderRadius: "10px" }}
            src={img}
          />
        ))}
      </Image.PreviewGroup>
  );
};

export default ImageComponent;
