import React from "react";
import { Carousel } from "react-bootstrap";
import { Player } from "video-react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom";
import { Data } from "../../Dispatch/MovieFavorites/Datamovie";
import {IoMdShareAlt} from "react-icons/io";
import VideoPlayer from "react-background-video-player";
export default function About() {
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="header">
            <nav className="nav nav-primary">
              <ul>
                <li>
                  <IoMdShareAlt /> Share{" "}
                </li>
              
                <li>
                  <Link to="Subscribers">Shows</Link>
                </li>
                <li>
                  <Link to="/launch">Movies</Link>
                </li>
                <li>
                  <Link to="sign"> Originals</Link>
                </li>
                <li>
                  <Link to="sign"> Recently </Link>
                </li>
                
              </ul>
            </nav>
          </div>

          <div className="header-right">
            <div className="searchbar open">
              <div className="searchbar-outer">
                <div className="searchbar-inner">
                  <i className="icon-search" />
                  <input type="text" placeholder="best, best and best" />
                </div>
                <img src={Data[0].posterUrl} className="fadeinout" id="logo" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="stage">
        <div className="stage-inner">
          <div className="stage-overlay" />
          <div className="embed-responsive embed-responsive-16by7">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/cs2mKXqQUOY?loop=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&color=white"
              width={560}
              height={315}
              frameBorder={0}
            />
          </div>
          <VideoPlayer
            className="video"
            src={
              "https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34daad7&profile_id=165&oauth2_token_id=57447761"
            }
            autoPlay={true}
            muted={true}
          />
          <div className="stage-meta">
            <h1 className="txt-big"> the 7</h1>
            <h1 className="txt-med">
              Best of the best shows and movies <br /> added in the last 2 days.
            </h1>
            <buttons className="btn">Play</buttons>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <ProductList Data={Data} />
      </div>
    </>
  );
}
 function ProductList({ Data }) {
  return (
    <div className="row" >
   
      {Data.map((e, key) => (
        <ProductCart ProductDetails={e}  />
      ))}
    </div>
  );
}

 function ProductCart({ 
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
        backgroundColor: "#462e01 ",
      }}
      className="col-4"
      className="row__inner"
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
            <source src={Data[0].video} type="video/mp4" />
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



  //  <div className="row">
  //      <h2>My List</h2>
  //      <div>
  //        <div className="tile">
  //          <div className="tile__media">
  //            <img src={thumbnail} alt="" />
  //          </div>
  //          <div className="tile__details">
  //            <div className="tile__title">Top Gear</div>
  //          </div>
  //        </div>
  //      </div>
  //    </div>