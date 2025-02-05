import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaSyncAlt, FaFilter } from "react-icons/fa";
import "./DashboardHeader.css";

const DashboardHeader = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="dashboard-header">
      <h4>Dashboard</h4>
      <div className="header-actions">
        <div className="date-picker-container">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            className="date-picker"
          />
          <button className="icon-btn disabled-btn">
            <FaCalendarAlt />
          </button>
        </div>
        <button className="icon-btn">
          <FaSyncAlt />
        </button>
        <button className="icon-btn">
          <FaFilter />
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
