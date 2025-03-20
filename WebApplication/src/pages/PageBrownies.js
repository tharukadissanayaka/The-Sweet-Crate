import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../cssfiles/PageBrownies.css";
import SearchBar from "../components/SearchBarBrow";
import browniesData from "../data/browniesData";

const PageBrownies = ({ cartItems, setCartItems }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleAddToCart = (brownies) => {
    setCartItems((prevItems) => [...prevItems, brownies]);
    alert(`Added ${brownies.name} to cart!`);
  };

  const filteredBrownies = browniesData.filter((brownies) =>
    brownies.name.toLowerCase().includes(searchQuery)
  );

  const goToCart = () => {
    navigate("/cart");
  };

  const goBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <div className="brownies-page">
      <SearchBar onSearch={handleSearch} />
      <div className="containerBrow">
        {filteredBrownies.map((brownies, index) => (
          <div key={index} className="imgBrow-button">
            <img src={brownies.image} alt={brownies.name} />
            <div className="info">
              <h3>{brownies.name}</h3>
              <p>Price: {brownies.price}</p>
              <p>Size: {brownies.size}</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(brownies)}
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

export default PageBrownies;