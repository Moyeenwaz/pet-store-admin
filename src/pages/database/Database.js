import React, { useState } from "react";
import { Customers } from "../../components/sidebar/customers/Customers";
import { Pets } from "../../components/sidebar/pets/Pets";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./database.css";
export const Database = () => {
  const [tabNumber, setTabNumber] = useState(1);

  const toggleTabs = (i) => {
    setTabNumber(i);
  };

  return (
    <div className="database">
      <Sidebar />
      <div className="database-wrapper">
        <div className="database-header">
          <div className="container">
            <div className="search">
              <img src="images/search.svg" classname="search-icon" alt="" />
              <input
                type="text"
                placeholder="Search by Name or ID"
                className="search-input"
              />
            </div>
            <button className="add-btn">&#43; Add Pet</button>
          </div>
          <div className="container">
            <h1 className="title">Database</h1>
            <div className="sort-filter-container">
              <div className="sort">
                Sort
                <img src="images/sort.svg" alt="" className="sort-icon" />
              </div>
              <div className="filter">
                Filter
                <img src="images/filter.svg" alt="" className="filter-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="tabbed-component">
          <div className="tab-header">
            <button
              onClick={() => toggleTabs(1)}
              className={`${tabNumber === 1 ? "active-tab tab" : "tab"}`}
            >
              Pets
            </button>
            <button
              onClick={() => toggleTabs(2)}
              className={`${tabNumber === 2 ? "active-tab tab" : "tab"}`}
            >
              Customers
            </button>
          </div>
          <div className="tab-content">
            <div
              className={`${
                tabNumber === 1
                  ? "pet-content content active-content"
                  : "pet-content content"
              }`}
            >
              <Pets />
            </div>
            <div
              className={`${
                tabNumber === 2
                  ? "customer-content content active-content"
                  : "customer-content content"
              }`}
            >
              <Customers />
              This is the page to render customers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
