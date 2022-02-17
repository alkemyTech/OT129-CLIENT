import React from "react";
import { Link, NavLink } from "react-router-dom";

import DonationAmountModal from "../Donations/DonationAmountModal";
import ONGLogo from "../../assets/onglogo.png";

import "./Header.css";

const Header = () => {
  //constante que luego será reemplazado por el estado del usaurio.

  const role = "standard";

  const auth = true;

  const menuPublic = [
    { link: "/", name: "Inicio", id: 1 },
    { link: "/nosotros", name: "Nosotros", id: 2 },
    { link: "/novedades", name: "Novedades", id: 3 },
    { link: "/actividades", name: "Actividades", id: 4 },
    { link: "/school-campaign", name: "Campaña Escolar", id: 5 },
    { link: "/toys-campaign", name: "Campaña Juguetes", id: 6 },
  ];

  return (
    <>
      <header className="container d-flex align-items-center justify-content-between p-0 my-4">
        <img alt="logo" className="img-fluid " src={ONGLogo} style={{ width: "7rem" }} />
        <nav>
          {menuPublic.map((item) => {
            return (
              <NavLink
                key={item.id.toString()}
                exact
                activeClassName="active"
                className="link-to-section container-fluid"
                to={item.link.toString()}
              >
                {item.name}
              </NavLink>
            );
          })}
          <NavLink
            exact
            activeClassName="active"
            className="link-to-section container-fluid"
            to="/contacto"
          >
            Contacto
          </NavLink>
        </nav>
        <div className="d-flex">
          {auth ? (
            <>
              <Link
                className="general-btn stroke-btn icono-btn text-decoration-none"
                data-bs-placement="bottom"
                data-bs-toggle="tooltip"
                title="Cerrar Sesión"
                to="/logout"
              >
                <i className="fas fa-sign-out-alt" />
              </Link>
              {role === "standard" && <DonationAmountModal />}
            </>
          ) : (
            <>
              <Link
                className="general-btn stroke-btn icono-btn text-decoration-none"
                data-bs-placement="bottom"
                data-bs-toggle="tooltip"
                title="Iniciar Sesión"
                to="/login"
              >
                <i className="fas fa-sign-in-alt" />
              </Link>
              <Link className="general-btn fill-btn text-decoration-none" to="/registro">
                Registro
              </Link>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
