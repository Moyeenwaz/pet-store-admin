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
          <Link to="/" className="link">
            Dashboard
          </Link>
        </li>
        <li className="nav-link">
          <img src="images/database.svg" alt="" />

          <Link to="/database" className="link">
            Database
          </Link>
        </li>
        <li className="nav-link">
          <img src="images/order-deets.svg" alt="" />

          <Link to="/order-details" className="link">
            Order Details
          </Link>
        </li>
        <li className="nav-link">
          <img src="images/logout.svg" alt="" />
          <Link to="/logout" className="link">
            Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
};
