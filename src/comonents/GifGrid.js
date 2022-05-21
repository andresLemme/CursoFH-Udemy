import React, { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifsGridItem } from "./GifsGridItem";

export const GifGrid = ({ category }) => {
  const [images, setimages] = useState([]);

  useEffect(() => {
   getGifs(category)
   .then(setimages)
  }, [category]);


  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">

      {images.map(image => (
        <GifsGridItem key={image.id} {...image} />
      ))}
    </div>
    </>
  );
};
