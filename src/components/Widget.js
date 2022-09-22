import React from "react";

function Widget({ title, img, length, type }) {
  return (
    <div className="dashboard-container">
      <div className={`dashboard-item dashboard-item-${type}`}>
        <h3 className="dashboard-item-title">{title}</h3>
        <img src={img} alt="" className="icon" />
        <p className="total-number">{length}</p>
      </div>
    </div>
  );
}

export default Widget;
