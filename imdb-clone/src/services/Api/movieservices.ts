import axios from 'axios';



const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_OMDB_BASE_URL;


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