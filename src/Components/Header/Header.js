import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import ONGLogo from "../../assets/onglogo.png";

import "./Header.css";

const Header = () => {
  const isLogged = useState(false);
  const menuPublic = [
    { link: "/", name: "Inicio", id: 1 },
    { link: "/nosotros", name: "Nosotros", id: 2 },
    { link: "/contacto", name: "Contacto", id: 3 },
    { link: "/novedades", name: "Novedades", id: 4 },
    { link: "/actividades", name: "Actividades", id: 5 },
  ];
  const menuUser = [
    { link: "/", name: "Inicio", id: 1 },
    { link: "/nosotros", name: "Nosotros", id: 2 },
    { link: "/contacto", name: "Contacto", id: 3 },
    { link: "/novedades", name: "Novedades", id: 4 },
    { link: "/actividades", name: "Actividades", id: 5 },
    { link: "/gracias", name: "Gracias", id: 6 },
    { link: "/donar", name: "Donar", id: 7 },
    { link: "/school-campaign", name: "Campaña escolar", id: 8 },
    { link: "/toys-campaign", name: "Campaña de juguetes", id: 9 },
  ];

  return (
    <>
      <header className="navbar container-fluid">
        <nav className="container link-to-section ">
          <img alt="logo" className="img-fluid " src={ONGLogo} style={{ width: "7rem" }} />
          <NavLink className="link-to-section" to="/">
            {menuPublic.map((item) => {
              return (
                <NavLink
                  key={item.id.toString()}
                  className="link-to-section container-fluid"
                  to={item.link.toString()}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </NavLink>
          {isLogged ? (
            <div className="general-btn">
              <button className="stroke-btn stroke-btn" component={Link} to="/loginForm">
                LOGIN
              </button>
              <button className="fill-btn fill-btn:hover" component={Link} to="/registerForm">
                REGISTRATE
              </button>
            </div>
          ) : (
            <>
              {menuUser.map((item) => {
                return (
                  <NavLink
                    key={item.id.toString()}
                    className="link-to-section container-fluid"
                    to={item.link.toString()}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
