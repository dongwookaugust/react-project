import React from "react";
import { useState } from "react";
import {
  FaHome,
  FaCalendarAlt,
  FaComments,
  FaBoxOpen,
  FaStore,
} from "react-icons/fa";
import "./Sidebar.css";
import SidebarMenu from "./SidebarMenu";

const Sidebar = ({ isCollapsed }) => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="logo-container">
        <a href="index.html" className="logo logo-light">
          <span className="logo-lg">
            <img src="/src/assets/images/logo.png" alt="logo" />
          </span>
          <span className="logo-sm">
            <img src="/src/assets/images/logo-sm.png" alt="logo small" />
          </span>
        </a>
      </div>

      <div className="sidebar-section-title">NAVIGATION</div>
      <SidebarMenu
        title="Dashboards"
        icon={<FaHome className="icon" />}
        badge="5"
        items={["Analytics", "Ecommerce", "Projects", "CRM", "E-Wallet"]}
        showDropdown={false}
      />

      <div className="sidebar-section-title">APPS</div>
      <div className="menu">
        <div className="menu-item">
          <FaCalendarAlt className="icon" />
          <span className="menu-name">Calendar</span>
        </div>
        <div className="menu-item">
          <FaComments className="icon" />
          <span className="menu-name">Chat</span>
        </div>
        <div className="menu-item">
          <FaBoxOpen className="icon" />
          <span className="menu-name">CRM</span>
        </div>
        <SidebarMenu
          title="Ecommerce"
          icon={<FaStore className="icon" />}
          items={[
            "Products",
            "Products Details",
            "Orders",
            "Order Details",
            "Customers",
            "Shopping Cart",
            "Checkout",
            "Sellers",
          ]}
          showDropdown={true}
        />
        <SidebarMenu
          title="Email"
          icon={<FaStore className="icon" />}
          items={["Inbox", "Read Email"]}
          showDropdown={true}
        />
      </div>
    </div>
  );
};

export default Sidebar;
