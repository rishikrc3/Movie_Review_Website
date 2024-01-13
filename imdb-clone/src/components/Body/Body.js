import React from "react";
import MovieCard from "./Movie_Card/MovieCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./Movie_Card/ShimmerUI";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfMovies, setListofMovies] = useState([]);
  const [movieName, setMovieName] = useState("Attack on Titan");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.omdbapi.com/?apikey=66263dea&s=" + movieName + "#"
    );

    const json = await data.json();
    setTimeout(() => {
      setListofMovies(json.Search);
    }, 1000);
  };
  if (listOfMovies.length === 0) {
    return (
      <div className="ShimmerCards flex flex-wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <div
            key={index}
            className="Shimmer-UI w-48 h-64 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse shadow-md rounded-md overflow-hidden m-2"
          >
            {/* Content goes here (optional) */}
          </div>
        ))}
      </div>
    );
  }

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="Body">
      <div className="SearchBar bg-gray-100 px-4 py-3 flex items-center ">
        <input
          type="text"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus: outline-double w-1/2"
        />
        <button
          className="Search-Button  bg-pink-300 text-white px-4 py-3 rounded-md ml-4 transition duration-300 hover:bg-pink-500"
          onClick={handleClick}
        >
          <h2>Search</h2>
        </button>
      </div>

      <div className="movie-cards flex flex-wrap ">
        {listOfMovies.map((listOfMovie) => (
          <Link to={"/movies/" + listOfMovie.imdbID} className="custom-link">
            <MovieCard moviesData={listOfMovie} key={listOfMovie.imdbID} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
