import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="offcanvas-body">
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-4">
        <li className="nav-item space">
          <NavLink activeClassName="active" className="links" to="/backoffice/organization">
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
          <NavLink activeClassName="active" className="links" to="/backoffice/testimonies">
            Testimonios
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
