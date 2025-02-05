import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import "./ToggleSearchBar.css";

const ToggleSearchBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };

  return (
    <div className="toggle-search-wrapper">
      <div className="toggle-search-icon">
        <IoMdSearch className="small-search-icon" onClick={toggleSearch} />
      </div>

      {isSearchVisible && (
        <div className="toggle-search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      )}
    </div>
  );
};

export default ToggleSearchBar;
