import React from "react";
import "./TotalSales.css";
import DropdownMenu from "../common/dropdowntoggle/DropdownMenu";

const TotalSales = () => {
  return (
    <div className="total-sales">
      <div className="total-sales-header">
        <h4 className="sales-section-title">TOTAL SALES</h4>
        <DropdownMenu
          options={["Sales Report", "Export Report", "Profit", "Action"]}
        />
      </div>
      <div className="sales-chart">[Chart]</div>
      <ul className="sales-details">
        <li>
          <span className="sales-color direct"></span>
          <span className="sales-type">Direct</span>
          <span className="sales-amount">$300.56</span>
        </li>
        <li>
          <span className="sales-color affiliate"></span>
          <span className="sales-type">Affiliate</span>
          <span className="sales-amount">$135.18</span>
        </li>
        <li>
          <span className="sales-color sponsored"></span>
          <span className="sales-type">Sponsored</span>
          <span className="sales-amount">$48.96</span>
        </li>
        <li>
          <span className="sales-color email"></span>
          <span className="sales-type">E-mail</span>
          <span className="sales-amount">$154.02</span>
        </li>
      </ul>
    </div>
  );
};

export default TotalSales;
