import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../cssfiles/PageCakes.css";
import SearchBar from "../components/SearchBarCakes";
import cakesData from "../data/cakesData";

const PageCakes = ({ cartItems, setCartItems }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleAddToCart = (cake) => {
    setCartItems((prevItems) => [...prevItems, cake]);
    alert(`Added ${cake.name} to cart!`);
  };

  const filteredCakes = cakesData.filter((cake) =>
    cake.name.toLowerCase().includes(searchQuery)
  );

  const goToCart = () => {
    navigate("/cart");
  };

  const goBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <div className="cakes-page">
      <SearchBar onSearch={handleSearch} />
      <div className="containerCake">
        {filteredCakes.map((cake, index) => (
          <div key={index} className="imgcake-button">
            <img src={cake.image} alt={cake.name} />
            <div className="info">
              <h3>{cake.name}</h3>
              <p>Price: {cake.price}</p>
              <p>Size: {cake.size}</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(cake)}
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

export default PageCakes;
