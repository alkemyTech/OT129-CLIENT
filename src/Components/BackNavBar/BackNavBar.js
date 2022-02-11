import React from "react";
import { Link } from "react-router-dom";

import logo from "./logo-modified.png";

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
                <Link className="nav-link" to="/backoffice/organization">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/backoffice/organization">
                  Organización
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/backoffice/activities">
                  Actividades
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/backoffice/news">
                  Novedades
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/backoffice/categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/backoffice/slides">
                  Slides
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/backoffice/members">
                  Miembros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/backoffice/users">
                  Usuarios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/backoffice/testimonies">
                  Testimonios
                </Link>
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
};

export default BackNavBar;
