import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true
  });

  useEffect( () =>{
    getGifs(category).then(image =>{
     setTimeout(() => {
       console.log(image)
      setstate({
        data: image,
        loading:false
      })
    })
     }, 3000);
  },[category])


  return state //{data; loading:true}
}


 // useEffect(() => {
  //  getGifs(category)
  //  .then(setimages)
  // }, [category]);