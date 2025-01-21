import React from "react";
import "../cssfiles/SearchBarMuff.css";


const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Muffins..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
