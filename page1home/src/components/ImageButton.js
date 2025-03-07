import React from "react";
import "../cssfiles/ImageButton.css";

import chocolatesImg from "../assets/tetiana-bykovets-2SoEaPFcEt4-unsplash.jpg";
import cakesImg from "../assets/kaouther-djouada-hcEDfkiVmMI-unsplash.jpg";
import browniesImg from "../assets/arantxa-aniorte-wIaYi63cmis-unsplash.jpg";
import toffeesImg from "../assets/shaikh-irfan-icX_8YmcQNY-unsplash.jpg";
import puddingsImg from "../assets/diliara-garifullina-alo1EspH-ec-unsplash.jpg";
import muffinsImg from "../assets/photo_2025-01-11_13-11-01.jpg";


const imageButtons = [
  { path: "/PageChocolates", src: chocolatesImg, label: "CHOCOLATES" },
  { path: "/PageCakes", src: cakesImg, label: "CAKES" },
  { path: "/PageBrownies", src: browniesImg, label: "BROWNIES" },
  { path: "/PageToffees", src: toffeesImg, label: "TOFFEES" },
  { path: "/PagePuddings", src: puddingsImg, label: "PUDDINGS" },
  { path: "/PageMuffins", src: muffinsImg, label: "MUFFINS" },
  
];


const ImageButton = ({ columns = 3 }) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: "40px 90px",
    justifyContent: "center",
  };

  return (
    <div style={gridStyle}>
      {imageButtons.map((button, index) => (
        <a
          key={index}
          href={button.path}
          className="image-button"
          aria-label={`Navigate to ${button.label}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={button.src}
            alt={button.label}
            onError={(e) => (e.target.src = "path/to/default-image.jpg")}
          />
          <div className="image-label">{button.label}</div>
        </a>
      ))}
    </div>
  );
};


export default ImageButton;

