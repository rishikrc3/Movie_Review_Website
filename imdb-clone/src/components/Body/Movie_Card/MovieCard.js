import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  const { moviesData } = props;
  // console.log(moviesData.Title);
  const { Title, Year, Poster } = moviesData;

  return (
    <div className="imdb-card">
      <h1>{Title}</h1>
      <h2>{Year}</h2>
      <img className="movie-logo" src={Poster} alt="img" />
    </div>
  );
};

export default MovieCard;
