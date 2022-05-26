import React from "react";
import PropTypes from 'prop-types';

export const GifsGridItem = ({title, url,id }) => {
  console.log({title,id,url})
  return (
    <div className="card animate__animated animate__bounce">
      <img src={url} alt={title} />
     
      <p>{title}</p>
    </div>
  );

};
GifsGridItem.prototype = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}