import React, { useState } from "react";
import Modalcomp from "./Modalcomp";
import "./Search.css";

export default function AddMovie({setMovies}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <div>
      <button onClick={() => setShow(true)} className="box2">
        {" "}
        AddMovie{" "}
      </button>
      <Modalcomp setMovies={setMovies} show={show} handleClose={handleClose} />
    </div>
  );
}
