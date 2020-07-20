import React, { useState } from "react";

export const Header = ({ setSortItem }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Students
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div style={{ width: "100%" }}>
          <select
            className="form-control"
            id="sel1"
            onChange={(e) => {
              setSortItem(e.target.value);
            }}
            style={{ width: "fit-content", marginLeft: "auto" }}
          >
            <option value="score">Score</option>
            <option value="attendance">Attendance</option>
            <option value="grade">Grade</option>
          </select>
        </div>
      </div>
    </nav>
  );
};
