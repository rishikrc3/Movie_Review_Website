import React from "react";
import "./Routes.css";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const MovieCard = () => {
  const [movieData, setMovieData] = useState(null);
  const data = useParams();
  const { imdbID } = data;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.omdbapi.com/?apikey=66263dea&i=" + imdbID + "#"
    );
    const jsonData = await data.json();
    console.log(imdbID);
    setMovieData(jsonData);
  };
  if (movieData === null) return <>Loading</>;
  return (
    <>
      <div className="movie-card-setup">
        <div className="movie-card">
          <img src={movieData.Poster} alt="hi" />
        </div>
        <div>
          <h3>Movie Name : {movieData.Title}</h3>
          <h3>Released: {movieData.Released}</h3>
          <h3>Runtime: {movieData.Runtime}</h3>
          <h3>Genre: {movieData.Genre}</h3>
          <h3>Director: {movieData.Director}</h3>
          <h3>Awards; {movieData.Awards}</h3>
          <h3>Plot: {movieData.Plot}</h3>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
