import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>accueil</li>
        </NavLink>

        <NavLink
          to="/content"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Download</li>
        </NavLink>

        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>à propos</li>
        </NavLink>

        <NavLink
          to="/Tournaments"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Excel file</li>
        </NavLink>

        <NavLink
          to="/Upload"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Upload File</li>
        </NavLink>

        <NavLink
          to="/ContactPage"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
