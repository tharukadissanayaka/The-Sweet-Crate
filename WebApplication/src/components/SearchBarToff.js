import React from "react";
import "../cssfiles/SearchBarToff.css";


const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Toffees..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
