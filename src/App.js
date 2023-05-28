import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./pages/NoDispatch/Home/Home";
import Contact from "./pages/NoDispatch/Contact/Contact";
import Sign from "./pages/NoDispatch/Sign/src/Sign";
import About from "./pages/NoDispatch/About/About";
import MovieFavorites from "./pages/Dispatch/MovieFavorites/MovieFavorites";
import NavLeft from "./pages/Nav-Mui/NavLeft";





export default function App() {
  return (
    <div className="gt">
      <div className="gt__box">
        <p style={{ textAlign: "center" }}>
          This website is in :language:. You can view it in another language by
          using Google Translate here.
        </p>

        <div className="gt__select">
          <div id="google_translate_element"></div>
        </div>
      </div>
      <main className="theme-content">
        <div className="App">
          <Router>
            <div className="navbar">
              <li className="logo">
                <img
                  alt=""
                  src="https://logos-marques.com/wp-content/uploads/2020/04/Canal-Logo-1984-768x432.png"
                />
              </li>

              <li>
                <Link to="MovieFavorites">Favorites</Link>
              </li>
            
              <li>
                <Link to="sign"> Sign In</Link>
              </li>
              <NavLeft />
            </div>

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="sign" element={<Sign />} />
              <Route path="*" element={<NotFound />} />
              <Route path="MovieFavorites" element={<MovieFavorites />} />
            </Routes>
          </Router>
        </div>
      </main>
    </div>
  );
}

