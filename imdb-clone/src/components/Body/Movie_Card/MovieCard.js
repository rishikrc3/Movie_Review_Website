import React from "react";
import "./MovieCard.css";

const MovieCard = () => {
  return (
    <div className="imdb-card">
      <h1>Jaws</h1>
      <h2>1975</h2>
      <img
        className="movie-logo"
        src="https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        alt="img"
      />
    </div>
  );
};

export default MovieCard;
