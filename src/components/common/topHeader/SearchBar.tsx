import React from "react";
import { IoMdSearch } from "react-icons/io";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-bar">
        <IoMdSearch className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
