import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import RevenueContainer from "./components/revenue/RevenuContainer";
import SalesContainer from "./components/totalsales/SalesContainer";
import Sidebar from "./components/common/sidebar/Sidebar";
import TopHeader from "./components/common/topHeader/TopHeader";
import Footer from "./components/common/footer/Footer";

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="app">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div
        className={`main-container ${isSidebarCollapsed ? "collapsed" : ""}`}
      >
        <TopHeader toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Dashboard />
          <RevenueContainer />
          <SalesContainer />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
