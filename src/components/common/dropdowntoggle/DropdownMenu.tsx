import React, { useState, useEffect, useRef } from "react";
import "./DropdownMenu.css";

interface DropdownMenuProps {
  options: string[];
  align?: "left" | "right" | "content";
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  options,
  align = "left",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`dot-dropdown-container align-${align}`} ref={dropdownRef}>
      <button className="dot-dropdown-toggle" onClick={toggleDropdown}>
        <i className="mdi mdi-dots-vertical"></i>
      </button>

      <ul className={`dot-dropdown-menu ${isOpen ? "open" : ""}`}>
        {options.map((option, index) => (
          <li key={index} onClick={() => setIsOpen(false)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
