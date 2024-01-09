import React from "react";
import "./Routes.css";
import { useState, useEffect, useParams } from "react";

const MovieCard = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.omdbapi.com/?apikey=66263dea&i=tt0050083#"
    );
    const jsonData = await data.json();
    console.log(jsonData.Title);
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
          <h1>{movieData.Title}</h1>
          <h2>{movieData.Year}</h2>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
