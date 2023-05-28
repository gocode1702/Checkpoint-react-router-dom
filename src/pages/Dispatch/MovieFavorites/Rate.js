import React from "react";

const Rate = ({ setSearchRate = () => {}, rate }) => {
  const stars = (x) => {
    let star = [];
    for (let i = 0; i < 10; i++) {
      if (i < x) {
        star.push(
          <span
            className="rating"
            key={i}
            onClick={() => setSearchRate(i + 1)}
            style={{ cursor: "pointer" }}
          >
            ★
          </span>
        );
      } else {
        star.push(
          <span
            className="rating"
            key={i}
            style={{ cursor: "pointer" }}
            onClick={() => setSearchRate(i + 1)}
          >
            ☆
          </span>
        );
      }
    }
    return star;
  };
  return <div>{stars(rate)}</div>;
};

export default Rate;
