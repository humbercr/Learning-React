import { useEffect } from "react";
import { getGifs } from "../components/helpers/getGifs";

export const GifGrid = ({ category }) => {

    useEffect( () => {
        getGifs(category);
    }, [])

  return (
    <>
      <h3>{category}</h3>

    <ol>
        <li>titulo</li>
        <li>titulo</li>
        <li>titulo</li>
        <li>titulo</li>



    </ol>


    </>
  );
};
