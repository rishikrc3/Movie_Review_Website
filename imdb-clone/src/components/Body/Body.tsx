import React from "react";
import MovieCard from "./Movie_Card/MovieCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./Movie_Card/ShimmerUI";
import { Link } from "react-router-dom";
import { searchMovies } from "../../services/Api/movieservices";
import { MovieType } from "../../services/types/movietypes";
import { Box, TextField, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Body = () => {
  const [listOfMovies, setListofMovies] = useState<MovieType[]>([]);
  const [movieName, setMovieName] = useState("Attack on Titan");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    searchMovies(movieName)
    .then((response) => {
      //console.log(response.data.Search)
      setListofMovies(response.data.Search);
    }).catch((error) => console.error(error));

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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          px: 2,
          py: 1.5,
          bgcolor: "grey.100",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          placeholder="Search movies..."
          sx={{ maxWidth: "50%" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          startIcon={<SearchIcon />}
          sx={{
            bgcolor: "#f9a8d4",
            "&:hover": {
              bgcolor: "#ec4899",
            },
          }}
        >
          Search
        </Button>
      </Box>
      <h1>Instance: {process.env.REACT_APP_INSTANCE_NAME}</h1>
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
