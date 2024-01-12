import React from "react";

import useMovieCard from "../Utils/useMovieCard";
import Accordion from "./Accordion";
import { useParams } from "react-router-dom";

const MovieCard = () => {
  const data = useParams();
  const { imdbID } = data;

  const movieData = useMovieCard(imdbID);
  if (movieData === null) return <>Loading</>;
  return (
    <>
      <div className="movie-card-setup flex items-center space-x-4">
        <div className="m-9">
          <div className="movie-card shadow-md rounded-md overflow-hidden bg-white transition-transform duration-300 transform hover:scale-105">
            <img src={movieData.Poster} alt="hi" className=" object-cover" />
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-2">{movieData.Title}</h3>
          <p className="text-sm text-gray-600 mb-2">{movieData.Genre}</p>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div>
              <strong>Released:</strong> {movieData.Released}
            </div>
            <div>
              <strong>Runtime:</strong> {movieData.Runtime}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div>
              <strong>Director:</strong> {movieData.Director}
            </div>
            <div>
              <strong>Awards:</strong> {movieData.Awards}
            </div>
          </div>
          <p className="text-sm">{movieData.Plot}</p>

          <Accordion
            actors={movieData.Actors}
            imdbRating={movieData.imdbRating}
          />
        </div>
      </div>
    </>
  );
};

export default MovieCard;
