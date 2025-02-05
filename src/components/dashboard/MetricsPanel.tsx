import React from "react";
import Card from "./Card";
import "./MetricsPanel.css";

const MetricsPanel = () => {
  const stats = [
    {
      title: "Customers",
      value: "36,254",
      change: "+5.27%",
      type: "customers",
      isPositive: true,
    },
    {
      title: "Orders",
      value: "5,543",
      change: "-1.08%",
      type: "orders",
      isPositive: false,
    },
    {
      title: "Revenue",
      value: "$6,254",
      change: "-7.00%",
      type: "revenue",
      isPositive: false,
    },
    {
      title: "Growth",
      value: "+ 30.56%",
      change: "+4.87%",
      type: "growth",
      isPositive: true,
    },
  ];

  return (
    <div className="metrics-container">
      {stats.map((stat, index) => (
        <Card key={index} {...stat} />
      ))}
    </div>
  );
};

export default MetricsPanel;
