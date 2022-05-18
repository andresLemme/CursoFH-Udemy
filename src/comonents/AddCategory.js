import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setinputValue] = useState("Hola mundo");

  const handleInput = e => {
    setinputValue(e.target.value);
    // console.log(inputValue)
  };
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>AddCategory</h2>
      <input type="text" value={inputValue} onChange={handleInput} />
    </form>
  );
};
