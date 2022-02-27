import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./BackNavBar.css";

import logo from "../../assets/onglogo.png";

const BackNavBar = () => {
  return (
    <div className="container d-flex justify-content-between">
      <nav className="navbar navbar-light bg-white">
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
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-4">
              <li className="nav-item space">
                <NavLink exact activeClassName="active" className="links" to="/backoffice">
                  Home
                </NavLink>
              </li>
              <li className="nav-item space">
                <NavLink activeClassName="active" className="links" to="/backoffice/organization">
                  Organización
                </NavLink>
              </li>
              <li className="nav-item space">
                <NavLink activeClassName="active" className="links" to="/backoffice/activities">
                  Actividades
                </NavLink>
              </li>
              <li className="nav-item space">
                <NavLink activeClassName="active" className="links" to="/backoffice/news">
                  Novedades
                </NavLink>
              </li>
              <li className="nav-item space">
                <NavLink activeClassName="active" className="links" to="/backoffice/categories">
                  Categories
                </NavLink>
              </li>
              <li className="nav-item space">
                <NavLink activeClassName="active" className="links" to="/backoffice/slides">
                  Slides
                </NavLink>
              </li>
              <li className="nav-item space">
                <NavLink activeClassName="active" className="links" to="/backoffice/members">
                  Miembros
                </NavLink>
              </li>
              <li className="nav-item space">
                <NavLink activeClassName="active" className="links" to="/backoffice/users">
                  Usuarios
                </NavLink>
              </li>
              <li className="nav-item space">
                <NavLink activeClassName="active" className="links" to="/backoffice/testimonials">
                  Testimonios
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Link className="navbar-brand" to="/">
        <img alt="logo" className="img-fluid " src={logo} style={{ width: "7rem" }} />
      </Link>
    </div>
  );
};

export default BackNavBar;
