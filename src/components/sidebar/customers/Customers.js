import React from "react";
import { Customer } from "./Customer";
import "./customer.css";
import { customers } from "../../../dummyData";

export const Customers = () => {
  return (
    <div className="customers">
      <ul className="table-head">
        <li className="cell">Customers Image</li>
        <li className="cell">ID</li>
        <li className="cell">Phonenumber</li>
        <li className="cell">Email</li>
        <li className="cell">Username</li>
      </ul>
      {customers.map((customer, i) => (
        <Customer
          image={customer.img}
          id={customer.id}
          phonenumber={customer.phone}
          email={customer.email}
          username={customer.name}
          key={i}
        />
      ))}
    </div>
  );
};
