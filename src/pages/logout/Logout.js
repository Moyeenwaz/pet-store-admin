import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./logout.css";

export const Logout = () => {
  return (
    <div className="logout">
      <Sidebar />
      <div className="logout-wrapper">
        <h1 className="text">Are you sure, you want to log out?</h1>
        <div className="logbtn">
          <button className="btn1">Cancel</button>
          <button className="btn2">Logout</button>
        </div>
      </div>
    </div>
  );
};
