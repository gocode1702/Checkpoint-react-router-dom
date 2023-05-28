import React from "react";
import ProductCart from "./ProductCart";

export default function ProductList({ Data }) {
  return (
    <div className="row" >
   
      {Data.map((e, key) => (
        <ProductCart ProductDetails={e}  />
      ))}
    </div>
  );
}
