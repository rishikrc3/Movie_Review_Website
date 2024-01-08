import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import MovieCard from "./Movie_Card/MovieCard";
const Body = () => {
  return (
    <div className="Body">
      <SearchBar />
      <MovieCard />
    </div>
  );
};

export default Body;
