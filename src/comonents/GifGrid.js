import React, { useState, useEffect } from "react";

export const GifGrid = ({ category }) => {


   useEffect(() => {
    getGifs()
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

    console.log(gifs);
  };

  // getGifs();
  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
