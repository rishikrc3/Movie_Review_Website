import { useState, useEffect } from "react";
const useMovieCard = (imdbID) => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.omdbapi.com/?apikey=66263dea&i=" + imdbID + "#"
    );

    const jsonData = await data.json();
    setMovieData(jsonData);
  };

  return movieData;
};

export default useMovieCard;
