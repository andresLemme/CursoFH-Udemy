
import React, {useState} from 'react'
import { AddCategory } from './comonents/AddCategory'
import { GifGrid } from './comonents/GifGrid'

export const GifExpertApp = () => {
  // const categories = ['One Puch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Puch'])
  
// const handleAdd = () =>{
//   setCategories([...categories, 'HunterXHunter'])
// }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr/>
      <AddCategory setCategories={setCategories}/>
      {/* <button onClick={handleAdd}>Agregar</button> */}
      {
        categories.map((category) =>{
          return(
            <GifGrid key={category} category={category}/>
            
          )
        })
      }
    </>
  )
}
