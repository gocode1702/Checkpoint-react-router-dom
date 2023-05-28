import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Products2 } from "./Data2";
import ProductList2 from "./ProductList2";

import "./MoviesCarousel.css";





export default function CarouselSeries() {
  return (
    <div className="container-fluid">
      <ProductList2 Data2={Products2} />
    </div>
  );
}
