import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import "./Sidebar.css";

interface SidebarMenuProps {
  title: string;
  icon?: React.ReactNode;
  badge?: string;
  items?: string[];
  showDropdown?: boolean;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  title,
  icon,
  badge,
  items = [],
  showDropdown = true, // 기본값: true (드롭다운 아이콘 표시)
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="menu">
      <div className="menu-item" onClick={toggleMenu}>
        <span className="menu-icon">{icon}</span>
        <span className="menu-text">{title}</span>
        {badge && <span className="badge">{badge}</span>}
        {showDropdown &&
          items.length > 0 &&
          (isOpen ? (
            <FaChevronDown className="dropdown-icon" />
          ) : (
            <FaChevronRight className="dropdown-icon" />
          ))}
      </div>
      {isOpen && items.length > 0 && (
        <div className="submenu">
          {items.map((item, index) => (
            <div key={index} className="submenu-item">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarMenu;
