import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="images/logo.png" alt="" />
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <img src="images/dashboard.svg" alt="" />
          <a href="/" className="link">
            Dashboard
          </a>
        </li>
        <li className="nav-link">
          <img src="images/database.svg" alt="" />

          <a href="/database" className="link">
            Database
          </a>
        </li>
        <li className="nav-link">
          <img src="images/order-deets.svg" alt="" />

          <a href="/order-details" className="link">
            Order Details
          </a>
        </li>
        <li className="nav-link">
          <img src="images/logout.svg" alt="" />
          <a href="/logout" className="link">
            Logout
          </a>
        </li>
      </ul>
    </aside>
  );
};
