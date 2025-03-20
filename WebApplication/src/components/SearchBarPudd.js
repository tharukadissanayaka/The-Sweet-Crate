import React from "react";
import "../cssfiles/SearchBarPudd.css";


const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Puddings..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
