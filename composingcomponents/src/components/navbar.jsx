import React, { Component } from "react";

//Stateless Functional Component
// const NavBar = (props) => {
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand mb-0 h1">
        Total Counters
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

//sfc

export default NavBar;
