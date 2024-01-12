const MovieCard = (props) => {
  const { moviesData } = props;
  // console.log(moviesData.Title);
  const { Title, Year, Poster } = moviesData;

  return (
    <div className=" m-4 p-2 ">
      <div className="imdb-card  shadow-md rounded-md overflow-hidden bg-white transition-transform duration-300 transform hover:scale-105 hover:bg-pink-300  items-center">
        <img className="movie-logo h-45 w-46 " src={Poster} alt="img" />
        <h1 className="text-lg font-semibold mb-2">{Title}</h1>
        <h2 className="text-sm text-gray-600">{Year}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
