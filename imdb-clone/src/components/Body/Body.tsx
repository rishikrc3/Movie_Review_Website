import React from "react";
import MovieCard from "./Movie_Card/MovieCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./Movie_Card/ShimmerUI";
import { Link } from "react-router-dom";
import { searchMovies } from "../../services/Api/movieservices";
import { MovieType } from "../../services/types/movietypes";
import { Box, TextField, Button, Container } from "@mui/material";
import SearchBar from "./SearchBar/SearchBar";

const Body = () => {
  const [listOfMovies, setListofMovies] = useState<MovieType[]>([]);
  const [movieName, setMovieName] = useState("Attack on Titan");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    searchMovies(movieName)
      .then((response) => {
        setListofMovies(response.data.Search);
      })
      .catch((error) => console.error(error));
  };

  if (listOfMovies.length === 0) {
    return (
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            py: 4,
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <Box
              key={index}
              sx={{
                width: 345,
                height: 450,
                background:
                  "linear-gradient(90deg, #e5e7eb 0%, #f3f4f6 50%, #e5e7eb 100%)",
                borderRadius: 1,
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "@keyframes pulse": {
                  "0%, 100%": { opacity: 1 },
                  "50%": { opacity: 0.5 },
                },
              }}
            />
          ))}
        </Box>
      </Container>
    );
  }

  const handleClick = () => {
    fetchData();
  };

  return (
    <Container maxWidth={false} sx={{ py: 4, px: 2 }}>
      <SearchBar movieName={movieName} setMovieName={setMovieName} handleClick={handleClick}/>
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <h1>Instance: {process.env.REACT_APP_INSTANCE_NAME}</h1>
      </Box> 
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {listOfMovies.map((listOfMovie) => (
          <Link
            to={"/movies/" + listOfMovie.imdbID}
            key={listOfMovie.imdbID}
            style={{ textDecoration: "none" }}
          >
            <MovieCard moviesData={listOfMovie} />
          </Link>
        ))}
      </Box>
    </Container>
  );
};

export default Body;
