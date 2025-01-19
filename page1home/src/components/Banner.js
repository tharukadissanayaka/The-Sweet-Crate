import React from "react";
import "../cssfiles/Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner-container">
      <img
        src={require("../assets/Dark Brown Chocolate Tutorial YouTube Thumbnail (1).png")}
        alt="Banner"
        width="1520"
        height="650"
        className="banner-image"
      />
       <Link to="/LoginForm">
         <button className="top-corner-button">Order Now &gt;&gt;</button>
       </Link>
      
    </div>
  );
}

export default Banner;
