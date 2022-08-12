import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./order-details.css";
export const OrderDetails = () => {
  return (
    <div className="order-details">
      <Sidebar />
      <div className="order-details-wrapper">
        <h1>This is the Order Details Page</h1>
      </div>
    </div>
  );
};
