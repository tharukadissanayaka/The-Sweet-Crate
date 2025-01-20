import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../cssfiles/PagePuddings.css";
import SearchBar from "../components/SearchBarPudd";
import puddingsData from "../data/puddingsData";

const PagePuddings = ({ cartItems, setCartItems }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleAddToCart = (puddings) => {
    setCartItems((prevItems) => [...prevItems, puddings]);
    alert(`Added ${ puddings.name} to cart!`);
  };

  const filteredPuddings =  puddingsData.filter(( puddings) =>
    puddings.name.toLowerCase().includes(searchQuery)
  );

  const goToCart = () => {
    navigate("/cart");
  };

  const goBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <div className=" puddings-page">
      <SearchBar onSearch={handleSearch} />
      <div className="containerPudd">
        {filteredPuddings.map(( puddings, index) => (
          <div key={index} className="imgPudd-button">
            <img src={ puddings.image} alt={ puddings.name} />
            <div className="info">
              <h3>{ puddings.name}</h3>
              <p>Price: { puddings.price}</p>
              <p>Size: { puddings.size}</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart( puddings)}
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

export default PagePuddings;