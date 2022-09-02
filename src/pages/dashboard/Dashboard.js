import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./dashboard.css";
import { pets, customers } from "../../dummyData";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-wrapper">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="dashboard-container">
          <div className="dashboard-item dashboard-item-pets">
            <h3 className="dashboard-item-title">Total Pets</h3>
            <img src="images/pets.png" alt="" className="icon" />
            <p className="total-number">{pets.length}</p>
          </div>
          <div className="dashboard-item dashboard-item-customers">
            <h3 className="dashboard-item-title">Total Customers</h3>
            <img src="images/face-man.png" alt="" className="icon" />
            <p className="total-number">{customers.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
