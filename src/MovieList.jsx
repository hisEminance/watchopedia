const MovieList = ({ movieList }) => (
  <div className="text-white">
    {movieList.map((movie, index) => (
      <div key={index}>- {movie}</div>
    ))}
  </div>
);

export default MovieList;