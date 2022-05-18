import React, { useState } from "react";


export const AddCategory = ({setCategories}) => {
  const [inputValue, setinputValue] = useState('');

  const handleInput = e => {
    setinputValue(e.target.value);
    // console.log(inputValue)
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if(inputValue.trim().length >2){
      setCategories(cats =>[...cats, inputValue]);
      setinputValue('')

    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>AddCategory</h2>
      <input type="text" value={inputValue} onChange={handleInput} />
    </form>
  );
};
