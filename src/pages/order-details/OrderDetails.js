import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./order-details.css";
export const OrderDetails = () => {
  return (
    <div className="order-details">
      <Sidebar />
      <div className="order-details-wrapper"></div>
      <form>
        <div>
          <label htmlFor="name"> Your name</label>
          <input type="text" id="name"></input>
        </div>
        <div>
          <label htmlFor="street"> Street</label>
          <input type="text" id="street"></input>
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input type="text" id="state"></input>
        </div>
        <button>Confirm</button>
      </form>
    </div>
  );
};
