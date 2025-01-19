import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../cssfiles/PageToffees.css";
import SearchBar from "../components/SearchBarToff";
import toffeesData from "../data/toffeesData";

const PageToffees = ({ CartItems, setCartItems }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleAddToCart = (toffee) => {
    setCartItems((prevItems) => [...prevItems, toffee]);
    alert(`Added ${toffee.name} to cart!`);
  };

  const filteredToffees = toffeesData.filter((toffee) =>
    toffee.name.toLowerCase().includes(searchQuery)
  );

  const goToCart = () => {
    navigate("/cart");
  };

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div className="toffees-page">
      <SearchBar onSearch={handleSearch} />
      <div className="containerToffee">
        {filteredToffees.map((toffee, index) => (
          <div key={index} className="imgToff-button">
            <img src={toffee.image} alt={toffee.name} />
            <div className="info">
              <h3>{toffee.name}</h3>
              <p>Price: {toffee.price}</p>
              <p>Size: {toffee.size}</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(toffee)}
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

export default PageToffees;