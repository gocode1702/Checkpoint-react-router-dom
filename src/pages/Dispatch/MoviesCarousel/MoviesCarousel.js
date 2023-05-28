import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Products } from "./data";
import ProductList from "./ProductList";

import "./MoviesCarousel.css";

function MoviesCarousel() {
  return (
    <div className="container-fluid">
      <ProductList Data={Products} />
     
    </div>
  );
}



