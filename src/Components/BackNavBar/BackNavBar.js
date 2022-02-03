import React from "react";
// eslint-disable-next-line no-unused-vars
import { Offcanvas } from "bootstrap";
import { Link } from "react-router-dom";

import logo from "./logo-modified.png";

function BackNavBar() {
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
        <div
          aria-labelledby="offcanvasNavbarLabel"
          className="offcanvas offcanvas-start"
          id="offcanvasNavbar"
          tabIndex="-1"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menú
            </h5>
            <button
              aria-label="Close"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              type="button"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a aria-current="page" className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  aria-expanded="false"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  id="offcanvasNavbarDropdown"
                  role="button"
                >
                  Dropdown
                </a>
                <ul aria-labelledby="offcanvasNavbarDropdown" className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <Link className="navbar-brand" to="/">
          <img alt="logo" className="img-fluid " src={logo} style={{ width: "7rem" }} />
        </Link>
      </div>
    </nav>
  );
}

export default BackNavBar;
