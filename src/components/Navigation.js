import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
      <p className="navbar-brand ms-3 mt-2 fs-2">{props.heading}</p>
      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse mr-5" id="navbar">
        <ul className="navbar-nav me-auto my-2 my-lg-0 ms-2 ms-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link fs-5" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fs-5" to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
        <form className="m-2">
          <input
            className="form-control me-2"
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder="Search..."
            onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
          ></input>
        </form>
      </div>
    </nav>
  );
};

export default Navigation;
