import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./logout.css";

export const Logout = () => {
  return (
    <div className="logout">
      <Sidebar />
      <div className="logout-wrapper">
        <h1>This is a Logout Page</h1>
      </div>
    </div>
  );
};
