import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./dashboard.css";
import { pets, customers } from "../../dummyData";
import Widget from "../../components/Widget";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-wrapper">
        <h1 className="dashboard-title">Dashboard</h1>

        <div className="dashboard-container">
          <Widget
            title="Total Pets"
            img="images/pets.png"
            type="pets"
            length={pets.length}
          />
          <Widget
            title="Total Customers"
            img="images/face-man.png"
            type="customers"
            length={customers.length}
          />
        </div>
      </div>
    </div>
  );
};
