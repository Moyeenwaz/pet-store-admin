import React from "react";
import { Orders } from "../../components/sidebar/orders/Orders";

import { Sidebar } from "../../components/sidebar/Sidebar";
import "./order-details.css";
export const OrderDetails = () => {
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
            <h1 className="title">Order-Details</h1>
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
          <div className="tab-header"></div>
          <Orders />
        </div>
      </div>
    </div>
  );
};
