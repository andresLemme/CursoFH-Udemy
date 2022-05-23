import { useState } from "react"

export const useFetchGifs = () => {
  const [state, setstate] = useState({
    data: [],
    loading: true
  });
  setInterval(() => {
    setstate({
      data: [1,2,3,4],
      loading: false
    })
  }, 3000);

  return state //{data; loading:true}
}
