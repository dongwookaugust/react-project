import React from "react";
import "./RevenuContainer.css";
import Revenue from "./Revenue";
import RevenueByLocation from "./RevenueByLocation";

const RevenueContainer = () => {
  return (
    <div className="revenue-container">
      <div className="revenue-sections">
        <Revenue />
        <RevenueByLocation />
      </div>
    </div>
  );
};

export default RevenueContainer;
