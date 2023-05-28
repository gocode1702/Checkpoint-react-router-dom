import React, { useState } from "react";
import { Data } from "./Datamovie";
import Search from "./Search";
import MovieList from "./MovieList";
import "./MovieFavorites.css";


export default function MovieFavorites() {
   const [movies, setMovies] = useState(Data);
  const [searchWord, setSearchWord] = useState("");
  const [searchRate, setSearchRate] = useState(0);
  return (
    <div className="container-fluid">
      <div className="row">
        <Search
          setSearchWord={setSearchWord}
          searchRate={searchRate}
          setSearchRate={setSearchRate}
        />

        <MovieList
          movies={
            searchWord
              ? movies.filter((e) =>
                  e.title.toLowerCase().includes(searchWord.toLowerCase())
                )
              : searchRate
              ? movies.filter((e) => e.rate >= searchRate)
              : movies
          }
        />
        
      </div>
    </div>
  );
}



