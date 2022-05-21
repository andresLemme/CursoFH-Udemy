import React, { useState, useEffect } from "react";
import { GifsGridItem } from "./GifsGridItem";

export const GifGrid = ({ category }) => {
  const [images, setimages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=CMpodpFp15TEuswOPawYe7z29S4MZK5L";
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(gif => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
      };
    });

    setimages(gifs);
    // console.log(gifs);
  };

  // getGifs();

  return (
    <div>
      <h3>{category}</h3>

      {images.map(image => (
        <GifsGridItem key={image.id} {...image} />
      ))}
    </div>
  );
};
