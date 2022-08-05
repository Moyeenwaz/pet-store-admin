import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-wrapper">
        <h1>This is the Dashboard Page</h1>
      </div>
    </div>
  );
};
