import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifsGridItem } from "./GifsGridItem";

export const GifGrid = ({ category }) => {
  // const [images, setimages] = useState([]);

  const { data: images, loading } = useFetchGifs();

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading &&<p className="animate__animated animate__flash">Loadin</p>}
      <div className="card-grid">
        {images.map(image => (
          <GifsGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
