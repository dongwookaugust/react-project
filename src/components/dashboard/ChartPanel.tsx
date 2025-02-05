import React from "react";
import "./ChartPanel.css";
import DropdownMenu from "../common/dropdowntoggle/DropdownMenu";

const ChartPanel = () => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h4 className="header-title">Projections vs Actuals</h4>
        <div className="dropdown">
          <DropdownMenu
            options={["Sales Report", "Export Report", "Profit", "Action"]}
          />
          <div className="dropdown-menu dropdown-menu-end"></div>
        </div>
      </div>

      <div className="chart">
        <div className="chart-image">[chart] </div>
      </div>
    </div>
  );
};

export default ChartPanel;
