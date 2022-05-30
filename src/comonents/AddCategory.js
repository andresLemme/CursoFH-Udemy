import React, { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
  const [inputValue, setinputValue] = useState('');

  const handleInput = e => {
    setinputValue(e.target.value);
    // console.log(inputValue)
    console.log('handleIInut llamado')
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(inputValue.trim().length >2){
      setCategories(cats =>[inputValue,...cats]);
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

AddCategory.PropTypes = {
  setCategories: PropTypes.func.isRequired
}