import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import MovieCard from "./Movie_Card/MovieCard";
import { moviesList } from "../Utils/Constant";
import { useState, useEffect } from "react";
import "./Body.css";
const Body = () => {
  const [listOfMovies, setListofMovies] = useState(moviesList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.omdbapi.com/?apikey=66263dea&s=jaws#"
    );

    const json = await data.json();
    console.log(json.Search[1].Title);

    setListofMovies(json.Search);
  };

  return (
    <div className="Body">
      <div className="Search">
        <SearchBar />
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
