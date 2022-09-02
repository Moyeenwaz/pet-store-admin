import React from "react";
import "./customer.css";

export const Customer = ({ image, name, id, phonenumber, email, username }) => {
  return (
    <ul className="table-row">
      <li className="cell">
        <img src={image} alt="" className="img" />
      </li>
      <li className="cell">{name}</li>
      <li className="cell">{id}</li>
      <li className="cell">{phonenumber}</li>
      <li className="cell">{email}</li>
      <li className="cell"> {username}</li>
    </ul>
  );
};
