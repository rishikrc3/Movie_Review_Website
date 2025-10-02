export interface MovieType  {
    Poster:string;
    Title : string;
    Type : string;
    Year : string;
    imdbID: string;
}

export interface MovieData {
  Title: string;
  Year: string;
  Type: "movie" | "series";
  Poster: string;
  Plot: string;
  Director: string;
  Released: string;
  Actors: string;
  Genre: string;
  Language: string;
  Country: string;
  Awards: string;
  Runtime: string;
  Rated: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  totalSeasons?: string;
}