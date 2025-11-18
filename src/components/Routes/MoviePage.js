import React from "react";
import { useState } from "react";
import useMovieCard from "../Utils/useMovieCard";
import Accordion from "./Accordion";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const MovieCard = () => {
  const data = useParams();
  const { imdbID } = data;

  const movieData = useMovieCard(imdbID);
  console.log(movieData)
  const [isAddedToWishList, setIsAddedToWishList] = useState(false);

  const handleAddtoWishList = () => {
    setIsAddedToWishList((prevValue) => !prevValue);
  };

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(movieData));
  };
  if (movieData === null) return <>Loading</>;
  return (
    <>
     Hi
    </>
  );
};

export default MovieCard;
