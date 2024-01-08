import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  const { moviesData } = props;
  // console.log(moviesData.Title);

  return (
    <div className="imdb-card">
      <h1>{moviesData.Title}</h1>
      <h2>{moviesData.Year}</h2>
      <img className="movie-logo" src={moviesData.Poster} alt="img" />
    </div>
  );
};

export default MovieCard;
