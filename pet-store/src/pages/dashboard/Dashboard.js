import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-wrapper">
        <h1>Dashboard</h1>
        <button className="btnd total-pets">
          <h3>Total Pets</h3>
          <img src="images/pet paw.svg" alt="" />
          150
        </button>
        <button className="btnd2 total-clients">
          <h3>Total Clients</h3>
          <img src="images/man face.svg" alt="" />
          55
        </button>
      </div>
    </div>
  );
};
