import React from "react";
import { Link } from "react-router-dom";

import "./BackNavBar.css";

import NavLinks from "../NavLinks/NavLinks";
import SideBar from "../SideBar/SideBar";
import logo from "../../../assets/onglogo.png";

const BackNavBar = () => {
  return (
    <nav className="navbar navbar-light bg-white">
      <div className="container-fluid">
        <button
          aria-controls="offcanvasNavbar"
          className="navbar-toggler border-0"
          data-bs-target="#offcanvasNavbar"
          data-bs-toggle="offcanvas"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <SideBar>
          <NavLinks />
        </SideBar>
        <Link className="navbar-brand" to="/">
          <img alt="logo" className="img-fluid " src={logo} style={{ width: "7rem" }} />
        </Link>
      </div>
    </nav>
  );
};

export default BackNavBar;
