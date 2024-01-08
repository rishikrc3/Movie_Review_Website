import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import MovieCard from "./Movie_Card/MovieCard";
import "./Body.css";
const Body = () => {
  return (
    <div className="Body">
      <SearchBar />
      <div className="movie-cards">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default Body;
