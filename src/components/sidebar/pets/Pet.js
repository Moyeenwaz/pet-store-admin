import React from "react";
import "./pets.css";

export const Pet = ({ image, id, breed, category, status }) => {
  return (
    <ul className="table-row">
      <li className="cell">
        <img src={image} alt="" className="img" />
      </li>
      <li className="cell">{id}</li>
      <li className="cell">{breed}</li>
      <li className="cell">{category}</li>
      <li
        className={`${
          status === "Available" ? "available cell" : "not-available cell"
        }`}
      >
        {status}
      </li>
    </ul>
  );
};
