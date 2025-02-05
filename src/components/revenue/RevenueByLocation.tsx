import React from "react";
import "./RevenueByLocation.css";
import RevenueLocationMap from "./RevenueByLocationMap";
import RevenueLocationChart from "./RevenueByLocationChart";
import DropdownMenu from "../common/dropdowntoggle/DropdownMenu";

const RevenueLocation = () => {
  return (
    <div className="revenue-by-location">
      <div className="location-header">
        <h4 className="rev-section-title">REVENUE BY LOCATION</h4>
        <DropdownMenu
          options={["Sales Report", "Export Report", "Profit", "Action"]}
        />
      </div>
      <RevenueLocationMap />
      <RevenueLocationChart />
    </div>
  );
};

export default RevenueLocation;
