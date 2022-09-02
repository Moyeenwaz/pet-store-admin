import React from "react";
import { Customer } from "./customer";
import "./customer.css";
import { customers } from "../../../dummyData";

export const Customers = () => {
  return (
    <div className="customers">
      <ul className="table-head">
        <li className="cell">customers Image</li>
        <li className="cell">ID</li>
        <li className="cell">Phonenumber</li>
        <li className="cell">Email</li>
        <li className="cell">Username</li>
      </ul>
      {customers.map((customer, i) => (
        <Customer
          image={customer.img}
          id={customer.id}
          phonenumber={customer.phonenumber}
          email={customer.email}
          username={customer.username}
          key={i}
        />
      ))}
    </div>
  );
};
