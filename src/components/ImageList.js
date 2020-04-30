
import React from "react";
import ImageCard from "./ImageCard";
import './ImageList.css';

const ImageList = (props) =>  {
  console.log(props.images);
  const imageHTML = props.images.map( image => {
    return <ImageCard key={image.id} image={image}  />
  });

  return (
    <div className="image-list"> {imageHTML} </div>
  );

}

export default ImageList;