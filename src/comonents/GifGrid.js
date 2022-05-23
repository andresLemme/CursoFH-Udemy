import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
// import { GifsGridItem } from "./GifsGridItem";

export const GifGrid = ({ category }) => {
  // const [images, setimages] = useState([]);
  
  const { loading} = useFetchGifs()
  console.log(loading)

  // useEffect(() => {
  //  getGifs(category)
  //  .then(setimages)
  // }, [category]);


  return (
    <>
    {loading ? 'cargando' : 'data cargada'}
      {/* <h3>{category}</h3>
      <div className="card-grid">

      {images.map(image => (
        <GifsGridItem key={image.id} {...image} />
      ))}
    </div> */}
    </>
  );
};
