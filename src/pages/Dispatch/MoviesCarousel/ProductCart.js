import React from "react";
import {Carousel}  from "react-bootstrap";
import { Player } from "video-react";


export default function ProductCart({
  ProductDetails: { title, description, price, images, videoUrl },
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
      }}
      className="col-4"
    >
      <Carousel style={{ width: "100%", height: "40%" }}>
        {images.map((e) => (
          <Carousel.Item>
            <img
              src={e}
              alt="First slide"
              style={{ width: "90%", height: "50%" }}
            />
          </Carousel.Item>
        ))}
        <Carousel.Item>
          <Player style={{ width: "200 px", height: "200px" }}>
            <source src={videoUrl} type="video/mp4" />
          </Player>
        </Carousel.Item>
      </Carousel>
      ;
      {/* <img src={thumbnail} alt={title} style={{ width: "90%", height: "50%" }}  /> */}
      <h4> {title}</h4>
      <p style={{ fontSize: ".4rem" }}> {description} </p>
      <span> {price}$ </span>
    </div>
  );
}
