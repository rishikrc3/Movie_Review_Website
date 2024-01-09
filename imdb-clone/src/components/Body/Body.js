import React from "react";
import MovieCard from "./Movie_Card/MovieCard";
import { useState, useEffect } from "react";
import "./Body.css";
import ShimmerUI from "./Movie_Card/ShimmerUI";
const Body = () => {
  const [listOfMovies, setListofMovies] = useState([]);
  const [movieName, setMovieName] = useState("Harry");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.omdbapi.com/?apikey=66263dea&s=" + movieName + "#"
    );

    const json = await data.json();
    //console.log(json.Search[1].Title);
    setTimeout(() => {
      setListofMovies(json.Search);
    }, 1000);
  };
  if (listOfMovies.length === 0) {
    return (
      <div className="ShimmerCards">
        <ShimmerUI />
        <ShimmerUI />
        <ShimmerUI />
        <ShimmerUI />
        <ShimmerUI />
        <ShimmerUI />
      </div>
    );
  }

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="Body">
      <div className="SearchBar">
        <input
          type="text"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button className="Search-Button" onClick={handleClick}>
          <h2>Search</h2>
        </button>
      </div>

      <div className="movie-cards">
        {listOfMovies.map((listOfMovie) => (
          <MovieCard moviesData={listOfMovie} key={listOfMovie.imdbID} />
        ))}
      </div>
    </div>
  );
};

export default Body;
