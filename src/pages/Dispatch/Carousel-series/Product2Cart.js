import React from "react";

import { Player } from "video-react";

export default function Product2Cart({
  ProductDetails: { title, description, prices, videoUrl, thumbnailUrl },
}) {
  return (
    <div
      style={{
        width: "20vw",
        height: "80vh",
        margin: "1rem",
        padding: ".7rem",
        border: ".5px solid black",
        backgroundColor: "orange",
        // backgroundSize: "2% 1% cover ",
        // backgroundRepeat: "no-repeat",
      }}
      className="col-4"
    >
      {/* <Player  style={{ width: "200 px", height: "200px" }}>
              <source src={videoUrl} type="video/mp4" />
            </Player> */}

      <img
        src={thumbnailUrl}
        alt={title}
        style={{ width: "90%", height: "50%" }}
      />
      {/* <h4> {title}</h4>
      <p style={{ fontSize: ".4rem" }}> {description} </p>
      <span> {prices} </span> */}
    </div>
  );
}
