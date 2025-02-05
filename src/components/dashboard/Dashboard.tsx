import React from "react";
import "./Dashboard.css";
import MetricsPanel from "./MetricsPanel";
import ChartPanel from "./ChartPanel";
import DashboardHeader from "./DashboardHeader";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="dashboard-content">
        <div className="metrics-panel">
          <MetricsPanel />
        </div>
        <div className="chart-panel">
          <ChartPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
