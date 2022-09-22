import React from "react";
import "./order.css";

export const Order = ({ image, id, phonenumber, email, address }) => {
  return (
    <ul className="table-row">
      <li className="cell">
        <img src={image} alt="" className="img" />
      </li>

      <li className="cell">{id}</li>
      <li className="cell">{address}</li>
      <li className="cell">{email}</li>
      <li className="cell"> {phonenumber}</li>
    </ul>
  );
};
