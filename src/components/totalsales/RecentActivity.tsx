import React, { useEffect, useRef } from "react";
import "./RecentActivity.css";
import { MdFileUpload } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { PiAirplaneTiltFill } from "react-icons/pi";
import DropdownMenu from "../common/dropdowntoggle/DropdownMenu";

const recentActivities = [
  {
    type: "sold",
    title: "You sold an item",
    content: "Paul Burgess just purchased “Hyper - Admin Dashboard”!",
    time: "5 minutes ago",
  },
  {
    type: "market",
    title: "Product on the Bootstrap Market",
    content: "Dave Gamache added Admin Dashboard",
    time: "30 minutes ago",
  },
  {
    type: "message",
    title: "Robert Delanety",
    content: "Send you message “Are you there?” ",
    time: "1 hour ago",
  },
  {
    type: "error",
    title: "Auderey Tobey",
    content: "Send you message “Are you there?” ",
    time: "1 hour ago",
  },
  {
    type: "sold",
    title: "You sold an item",
    content: "Paul Burgess just purchased “Hyper - Admin Dashboard”!",
    time: "16 minutes ago",
  },
  {
    type: "market",
    title: "Product on the Bootstrap Market",
    content: "Dave Gamache added Admin Dashboard",
    time: "22 minutes ago",
  },
  {
    type: "message",
    title: "Robert Delanety",
    content: "Send you message “Are you there?” ",
    time: "2 days ago",
  },
];

const RecentActivity = () => {
  const activityListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const activityList = activityListRef.current;
    if (!activityList) return;

    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      activityList.classList.add("scrolling");

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        activityList.classList.remove("scrolling");
      }, 1000);
    };

    activityList.addEventListener("scroll", handleScroll);

    return () => {
      activityList.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const getActivityIcon = (type: string) => {
    const iconStyle = { fontSize: "12px" };
    switch (type) {
      case "sold":
        return <MdFileUpload style={iconStyle} />;
      case "market":
        return <PiAirplaneTiltFill style={iconStyle} />;
      case "message":
        return <FaMicrophone style={iconStyle} />;
      case "error":
        return <MdFileUpload style={iconStyle} />;
      default:
        return null;
    }
  };

  return (
    <div className="recent-activity">
      <div className="recent-header">
        <h4 className="header-title">RECENT ACTIVITY</h4>
        <DropdownMenu
          options={["Sales Report", "Export Report", "Profit", "Action"]}
        />
      </div>
      <ul className="activity-list" ref={activityListRef}>
        {recentActivities.map((activity, index) => (
          <li key={index}>
            <span className={`activity-icon ${activity.type}`}>
              {getActivityIcon(activity.type)}
            </span>
            <div className="activity-details">
              <span className="activity-title">{activity.title}</span>
              <span className="activity-content">
                {activity.content}
                <span className="activity-time">{activity.time}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
