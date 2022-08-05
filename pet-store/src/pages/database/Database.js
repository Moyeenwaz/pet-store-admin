import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./database.css";
export const Database = () => {
  return (
    <div className="database">
      <Sidebar />
      <div className="database-wrapper">
        <h1>This is the database page</h1>
      </div>
    </div>
  );
};
