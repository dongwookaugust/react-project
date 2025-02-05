import React, { useState } from "react";
import "./TopHeader.css";
import SearchBar from "./SearchBar";
import LanguageDropdown from "./LanguageDropdown";
import NavIcons from "./NavIcons";
import UserProfile from "./UserProfile";
import { IoMdSearch } from "react-icons/io";
import ToggleSearchBar from "./ToggleSearchBar";

const TopHeader = ({ toggleSidebar }) => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <header className="navigation">
      <nav className="nav-container">
        <div className="nav-left">
          <span className="top-logo-sm">
            <img src="/src/assets/images/logo-sm.png" alt="logo small" />
          </span>
          <button className="button-toggle-menu" onClick={toggleSidebar}>
            <i className="mdi mdi-menu"></i>
          </button>
          <SearchBar />
        </div>
        <div className="nav-right">
          <ToggleSearchBar />
          <LanguageDropdown />
          <NavIcons />
          <UserProfile />
        </div>
      </nav>
    </header>
  );
};

export default TopHeader;
