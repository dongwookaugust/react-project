import React from "react";
import TopSelling from "./TopSelling";
import TotalSales from "./TotalSales";
import RecentActivity from "./RecentActivity";
import "./SalesContainer.css";

const SalesContainer = () => {
  return (
    <div className="sales-container">
      <div className="sales-section">
        <div className="left-section">
          <TopSelling />
        </div>
        <div className="right-section">
          <div className="sales-info">
            <TotalSales />
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesContainer;
