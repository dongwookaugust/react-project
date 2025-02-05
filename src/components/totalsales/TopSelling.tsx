import React from "react";
import "./TopSelling.css";
import { MdDownload } from "react-icons/md";

const topSellingData = [
  {
    name: "ASOS Ridley High Waist",
    date: "07 April 2018",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    date: "25 March 2018",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    date: "17 March 2018",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    date: "12 March 2018",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  {
    name: "Marco Shoes",
    date: "05 March 2018",
    price: "$28.49",
    quantity: 69,
    amount: "$1,965.81",
  },
];

const TopSelling = () => {
  return (
    <div className="top-selling-container">
      <div className="top-selling-header">
        <h4>TOP SELLING PRODUCTS</h4>
        <button className="export-btn">
          Export <MdDownload />
        </button>
      </div>
      <div className="top-selling-list">
        {topSellingData.map((product, index) => (
          <div key={index} className="top-selling-item">
            <div className="product-info">
              <h5>{product.name}</h5>
              <p>{product.date}</p>
            </div>
            <div className="product-price">
              <span>{product.price}</span>
              <p>Price</p>
            </div>
            <div className="product-quantity">
              <span>{product.quantity}</span>
              <p>Quantity</p>
            </div>
            <div className="product-amount">
              <span>{product.amount}</span>
              <p>Amount</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
