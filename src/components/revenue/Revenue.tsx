import React from "react";
import RevenueChart from "./RevenuChart";
import "./Revenue.css";
import DropdownMenu from "../common/dropdowntoggle/DropdownMenu";

const Revenue = () => {
  return (
    <div className="revenue-panel">
      <div className="revenue-header">
        <h4 className="rev-header-title">Revenue</h4>
        <DropdownMenu
          options={["Sales Report", "Export Report", "Profit", "Action"]}
        />
      </div>

      <div className="week-summary">
        <div className="current-week">
          <p>Current Week</p>
          <h2>
            <span className="dot blue-dot"></span> $58,254
          </h2>
        </div>
        <div className="previous-week">
          <p>Previous Week</p>
          <h2>
            <span className="dot green-dot"></span> $69,524
          </h2>
        </div>
      </div>

      <div className="revenue-chart">
        <div className="chart-info">
          <p className="earning-text">
            <h4>Today's Earning: $2,562.30</h4>
          </p>
          <p className="revenue-desc">
            Etiam ultricies nisi vel augue. Curabitur ullamcorper
            <br /> ultricies nisi. Nam eget dui. Etiam rhoncus.
          </p>
          <button className="view-statements">
            View Statements<span className="arrow">→</span>{" "}
          </button>
        </div>
        <RevenueChart />
      </div>
    </div>
  );
};

export default Revenue;
