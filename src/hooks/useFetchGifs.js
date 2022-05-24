import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = category => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then(image => {
      setstate({
        data: image,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
