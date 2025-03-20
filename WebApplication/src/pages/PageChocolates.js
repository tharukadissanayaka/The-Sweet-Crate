import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../cssfiles/PageChocolates.css";
import SearchBar from "../components/SearchBarChoc";
import chocolatesData from "../data/chocolatesData";

const PageChocolates = ({ cartItems, setCartItems }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleAddToCart = (chocolate) => {
    setCartItems((prevItems) => [...prevItems, chocolate]);
    alert(`Added ${chocolate.name} to cart!`);
  };

  const filteredChocolates = chocolatesData.filter((chocolate) =>
    chocolate.name.toLowerCase().includes(searchQuery)
  );

  const goToCart = () => {
    navigate("/cart");
  };

  const goBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <div className="chocolates-page">
      <SearchBar onSearch={handleSearch} />
      <div className="containerChoc">
        {filteredChocolates.map((chocolate, index) => (
          <div key={index} className="imgchoc-button">
            <img src={chocolate.image} alt={chocolate.name} />
            <div className="info">
              <h3>{chocolate.name}</h3>
              <p>Price: {chocolate.price}</p>
              <p>Size: {chocolate.size}</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(chocolate)}
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

export default PageChocolates;



