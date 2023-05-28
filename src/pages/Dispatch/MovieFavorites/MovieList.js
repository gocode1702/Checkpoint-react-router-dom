import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <div className="row">
      {movies.map((e) => (
        <MovieCard movieDetails={e} />
      ))}
    </div>
  );
}
