
import React, {useState} from 'react'
import { AddCategory } from './comonents/AddCategory'

export const GifExpertApp = () => {
  // const categories = ['One Puch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Puch', 'Samurai X', 'Dragon Ball'])
  
// const handleAdd = () =>{
//   setCategories([...categories, 'HunterXHunter'])
// }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr/>
      <AddCategory/>
      {/* <button onClick={handleAdd}>Agregar</button> */}
      {
        categories.map((category) =>{
          return(
            <li key={category}>{category}</li>
          )
        })
      }
    </>
  )
}
