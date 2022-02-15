import React from "react";
import { Link } from "react-router-dom";

import logoONG from "../../assets/onglogo.png";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="text-center container-footer">
      <div className="container p-3">
        <div className="row d-flex align-items-center">
          <img alt="logo ong" className="col-12 col-sm-4 col-md-4 col-xl-3" src={logoONG} />

          <div className="d-none d-sm-block col-sm-4 col-md-4 col-xl-3">
            <h4>Sitio web</h4>
            <a
              className="text-blue"
              href="https://ONGSomosMas.com.ar"
              rel="noreferrer"
              target="_blank"
            >
              www.somosnas.ong
            </a>
          </div>

          <div className="d-none d-xl-block col-xl-3">
            <h4>Campañas</h4>
            <Link className="text-blue" to="/toys-campaign">
              Otras campañas
            </Link>
          </div>

          <nav className="d-flex justify-content-center mt-4 mt-sm-0 d-md-block col-12 col-sm-4 col-md-4 col-xl-3">
            <div className="m-1 d-md-flex align-items-center">
              <a
                className="containerButtonImage "
                href="https://facebook.com/ONGSomosMas"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-facebook " />
              </a>
              <p className="d-none d-md-inline text-blue m-1">facebook</p>
            </div>
            <div className="m-1 d-md-flex align-items-center">
              <a
                className="containerButtonImage "
                href="https://twitter.com/ONGSomosMas"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </a>
              <p className="d-none d-md-inline text-blue m-1">Twitter</p>
            </div>
            <div className="m-1 d-md-flex align-items-center">
              <a
                className="containerButtonImage "
                href="https://instagram.com/ONGSomosMas"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-instagram-square " />
              </a>
              <p className="d-none d-md-inline text-blue m-1">Instagram</p>
            </div>
            <div className="m-1 d-md-flex align-items-center">
              <a
                className="containerButtonImage "
                href="https://linkedin.com/ONGSomosMas"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin " />
              </a>
              <p className="d-none d-md-inline text-blue m-1">Linkedin</p>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
