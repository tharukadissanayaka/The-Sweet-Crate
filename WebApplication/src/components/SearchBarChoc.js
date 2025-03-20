import React from "react";
import "../cssfiles/SearchBarChoc.css";


const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search chocolates..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;



