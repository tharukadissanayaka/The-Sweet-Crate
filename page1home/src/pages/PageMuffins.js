import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../cssfiles/PageMuffins.css";
import SearchBar from "../components/SearchBarMuff";
import muffinsData from "../data/muffinsData";

const PageMuffins = ({ cartItems, setCartItems }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleAddToCart = (muffins) => {
    setCartItems((prevItems) => [...prevItems, muffins]);
    alert(`Added ${muffins.name} to cart!`);
  };

  const filteredMuffins = muffinsData.filter((muffins) =>
    muffins.name.toLowerCase().includes(searchQuery)
  );

  const goToCart = () => {
    navigate("/cart");
  };

  const goBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <div className="muffins-page">
      <SearchBar onSearch={handleSearch} />
      <div className="containerMuff">
        {filteredMuffins.map((muffins, index) => (
          <div key={index} className="imgMuff-button">
            <img src={muffins.image} alt={muffins.name} />
            <div className="info">
              <h3>{muffins.name}</h3>
              <p>Price: {muffins.price}</p>
              <p>Size: {muffins.size}</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(muffins)}
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button className="view-cart" onClick={goToCart}>
          View Cart
        </button>
        <Link to="/ImageButton"><button className="back-button" onClick={goBack}>
          Back
        </button></Link>
      </div>
    </div>
  );
};

export default PageMuffins;