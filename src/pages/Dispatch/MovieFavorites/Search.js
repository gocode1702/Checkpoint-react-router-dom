
import React, { useState } from "react";
import Rate from "./Rate";
import AddMovie from "./AddMovie";
import { Data } from "./Datamovie";
import "./Search.css";
export default function Search({ setSearchWord, searchRate, setSearchRate }) {
  const [movies, setMovies] = useState(Data);
  
  return (
    <div className="main">
      <div className="area">
        <h3>
          Unlimited movies, TV <br />
          shows, and more.
        </h3>
        <h4>Watch anywhere. Cancel anytime.</h4>
        <AddMovie setMovies={setMovies} />
        <div className="search">
          <input
            className="box"
            type={"text"}
            placeholder="search movie"
            onChange={(event) => setSearchWord(event.target.value)}
          />

          <span className="try">
            <Rate rate={searchRate} setSearchRate={setSearchRate} />
            <i className="fas fa-chevron-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
