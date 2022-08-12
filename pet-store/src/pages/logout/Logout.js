import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./logout.css";

export const Logout = () => {
  return (
    <div className="logout">
      <Sidebar />
      <div className="logout-wrapper">
        <h1>Do you wish to logout?</h1>
        <button className="btn btn1">Yes</button>
        <button className="btn btn2">No</button>
      </div>
    </div>
  );
};
