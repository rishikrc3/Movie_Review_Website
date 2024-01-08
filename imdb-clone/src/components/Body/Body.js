import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import MovieCard from "./Movie_Card/MovieCard";
import { moviesList } from "../Constants/Constant";
import "./Body.css";
const Body = () => {
  return (
    <div className="Body">
      <div className="Search">
        <SearchBar />
      </div>

      <div className="movie-cards">
        {moviesList.map((movieList) => (
          <MovieCard moviesData={movieList} key={movieList.imdbID} />
        ))}
      </div>
    </div>
  );
};

export default Body;
