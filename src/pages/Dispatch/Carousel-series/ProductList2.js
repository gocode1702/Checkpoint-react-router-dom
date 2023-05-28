import React from "react";
import Product2Cart from "./Product2Cart";

export default function ProductList2({ Data2 }) {
  return (
    <div className="row" >
   
      {Data2.map((e, key) => (
        <Product2Cart ProductDetails={e}  />
      ))}
    </div>
  );
}
