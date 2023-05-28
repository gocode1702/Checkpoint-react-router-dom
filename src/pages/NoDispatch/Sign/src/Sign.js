import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Products2 } from "../../../Dispatch/Carousel-series/Data2";
import "./Sign.css";
import logo from "../../../Media/img/inchtaien.png";
import { Player } from "video-react";
import Navbar from "./Navbar";
// import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProvider } from "./contexts/ThemeContext";

function ProductList2({ Data2 }) {
  return (
    <div className="row">
      {Data2.map((e, key) => (
        <Product2Cart ProductDetails={e} />
      ))}
    </div>
  );
}
export default function Sign() {
  return (
    <ThemeProvider>
      <PageContent>
        <Navbar />
        <div className="container-fluid">
          <ProductList2 Data2={Products2} />
        </div>
      </PageContent>
    
    </ThemeProvider>
  );
}

// function Product2Cart({
//   ProductDetails: { title, description, prices, videoUrl, thumbnailUrl },
// }) {
//   return (
//     <div
//       style={{
//         width: "20vw",
//         height: "80vh",
//         margin: "1rem",
//         padding: ".7rem",
//         border: ".5px solid black",
//         backgroundColor: "orange",
//         // backgroundSize: "2% 1% cover ",
//         // backgroundRepeat: "no-repeat",
//       }}
//       className="col-4"
//     >
//       {/* <Player  style={{ width: "200 px", height: "200px" }}>
//               <source src={videoUrl} type="video/mp4" />
//             </Player> */}

//       <img
//         src={thumbnailUrl}
//         alt={title}
//         style={{ width: "90%", height: "50%" }}
//       />
//       {/* <h4> {title}</h4>
//       <p style={{ fontSize: ".4rem" }}> {description} </p>
//       <span> {prices} </span> */}
//     </div>
//   );
// }

function Product2Cart({
  ProductDetails: { title, description, prices, videoUrl, thumbnailUrl },
}) {
  return (
    <div className="col-4" >
      <div
        className="row"
        style={{
          width: "30vw",
          height: "100vh",
          margin: "1rem",
          padding: ".7rem",
          border: ".5px solid black",
          backgroundColor: "orange",
        }}
      >
        <div className="example-1 card" style={{ display: "flex" }}>
          <img
            src={thumbnailUrl}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              backgroundSize: "20% 5% cover ",
              backgroundRepeat: "no-repeat",
            }}
          />
          
          <div className="wrapper">
            <div className="date">
              <span className="day">12</span>
              <span className="month">Aug</span>
              <span className="year">2016</span>
            </div>
            <div className="data">
              <div className="content">
                <span className="author">Jane Doe</span>
                <p className="title">
                  <a href="#">
                    Boxing icon has the will for a couple more fights
                  </a>
                </p>
                <p className="text">
                  The highly anticipated world championship fight will take
                  place at 10am and is the second major boxing blockbuster in
                  the nation after 43 years.
                </p>
                <label htmlFor="show-menu" className="menu-button">
                  <span />
                </label>
              </div>
              <input type="checkbox" id="show-menu" />
              <ul className="menu-content">
                <li>
                  <a href="#" className="fa fa-bookmark-o" />
                </li>
                <li>
                  <a href="#" className="fa fa-heart-o">
                    <span>47</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="fa fa-comment-o">
                    <span>8</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="example-2 card">
          <img
            src={logo}
            alt="logo"
            style={{
              backgroundSize: "center cover ",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="wrapper">
            <div className="header">
              <div className="date">
                <span className="day">12</span>
                <span className="month">Aug</span>
                <span className="year">2016</span>
              </div>
              <ul className="menu-content">
                <li>
                  <a href="#" className="fa fa-bookmark-o" />
                </li>
                <li>
                  <a href="#" className="fa fa-heart-o">
                    <span>18</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="fa fa-comment-o">
                    <span>3</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="data">
              <div className="content">
                <span className="author">Jane Doe</span>
                <h5 className="title">
                  <a href="#">Stranger Things: The sound of the Upside Down</a>
                </h5>
                <p className="text">
                  The antsy bingers of Netflix will eagerly anticipate the
                  digital release of the Survive soundtrack, out today.
                </p>
                <a href="#" className="button">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
