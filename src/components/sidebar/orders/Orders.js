import React from "react";
import { Order } from "./Order";
import "./order.css";
import { orders } from "../../../dummyData";

export const Orders = () => {
  return (
    <div className="customers">
      <ul className="table-head">
        <li className="cell">Name</li>
        <li className="cell">Pet ID</li>
        <li className="cell">Delivery Address</li>
        <li className="cell">Email</li>
        <li className="cell">Phone Number</li>
      </ul>
      {orders.map((order, i) => (
        <Order
          image={order.img}
          id={order.id}
          address={order.address}
          email={order.email}
          phonenumber={order.phone}
          key={i}
        />
      ))}
    </div>
  );
};
