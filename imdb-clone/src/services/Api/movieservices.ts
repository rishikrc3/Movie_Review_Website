import axios from 'axios';
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_OMDB_BASE_URL;

/*have an http service, and the http does not need to know any of that and kind of use generics*/

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params:{
    apikey:API_KEY
  }
});


export const searchMovies = (movieName: string) => {
  return apiClient.get("",{
    params: {
        s:movieName
    }
  });
};

export const getMovieById = (imdbID:string) =>{
  return apiClient.get("", {
    params: {
      i: imdbID,
    },
  });
}