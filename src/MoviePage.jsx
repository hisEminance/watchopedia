import { useState } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

const MoviePage = () => {
  const [movieList, setMovieList] = useState(["Die Hard", "Harry Potter"]);

  const handleAddMovie = (newMovie) => {
    setMovieList((prev) => [...prev, newMovie]);
  };

  return (
    <div className="container col-12 col-md-6 my-3 border">
      <AddMovie onAddMovie={handleAddMovie} />
      <MovieList movieList={movieList} />
    </div>
  );
};

export default MoviePage;