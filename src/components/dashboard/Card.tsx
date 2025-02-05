import React from "react";
import { FaUserGroup, FaDollarSign } from "react-icons/fa6";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BiPulse } from "react-icons/bi";
import { TbArrowBigUpFilled, TbArrowBigDownFilled } from "react-icons/tb";

interface CardProps {
  title: string;
  value: string;
  change: string;
  type: string;
  isPositive: boolean;
}

const Card = ({ title, value, change, type, isPositive }: CardProps) => {
  const getIcon = () => {
    switch (type) {
      case "customers":
        return <FaUserGroup className="card-icon customers" />;
      case "orders":
        return <MdOutlineAddShoppingCart className="card-icon orders" />;
      case "revenue":
        return <FaDollarSign className="card-icon revenue" />;
      case "growth":
        return <BiPulse className="card-icon growth" />;
      default:
        return null;
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h5>{title}</h5>
        {getIcon()}
      </div>
      <h2>{value}</h2>
      <div className={`change-text ${isPositive ? "positive" : "negative"}`}>
        <div className="change-left">
          {isPositive ? (
            <TbArrowBigUpFilled className="change-icon up" />
          ) : (
            <TbArrowBigDownFilled className="change-icon down" />
          )}
          {change}
        </div>
        <span className="since-text">Since last month</span>
      </div>
    </div>
  );
};

export default Card;
