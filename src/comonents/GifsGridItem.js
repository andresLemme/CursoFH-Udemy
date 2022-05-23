import React from "react";

export const GifsGridItem = ({title, url,id }) => {
  console.log({title,id,url})
  return (
    <div className="card animate__animated animate__bounce">
      <img src={url} alt={title} />
     
      <p>{title}</p>
    </div>
  );

};
