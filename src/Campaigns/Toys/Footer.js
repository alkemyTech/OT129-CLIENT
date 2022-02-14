import React from "react";
import { Link } from "react-router-dom";
import "./FooterToys.css";

import ONGLogo from "../../assets/onglogo.png";

const Footer = () => {
  return (
    <footer className="container-fluid container-footer">
      <div className="row p-0">
        <div className="col-sm-4 col-xxl-3 logo-container">
          <nav className="nav">
            <Link className="link-nav" to="/">
              <img className="logo" src={ONGLogo} />
            </Link>
          </nav>
        </div>
        <div className="d-none d-sm-flex text-access-container col-sm-4 col-xxl-3">
          <div className="text-access">
            <h3>Sitio Web</h3>
            <nav className="nav">
              <Link className="link-nav text-decoration-none" to="/">
                www.somosmas.ong
              </Link>
            </nav>
          </div>
        </div>
        <div className="d-none d-xxl-flex text-access-container col-sm-4 col-xxl-3">
          <div className="text-access">
            <h3>Campañas</h3>
            <nav className="nav">
              <Link className="link-nav text-decoration-none" to="/school-campaign">
                Escuelas
              </Link>
            </nav>
          </div>
        </div>
        <div className="row-social col-sm-4 col-xxl-3">
          <div className="socials-icons-container">
            <div className="icon-container">
              <a className="social-link " href="www.facebook.com" rel="noreferrer" target="_blank">
                <div className="social-icon">
                  <i className="fab fa-facebook-f" />
                </div>
                <p className="d-none d-lg-flex icon-text ">@somosmas</p>
              </a>
            </div>
            <div className="icon-container">
              <a
                className="social-link "
                href="https://twitter.com/ONGSomosMas"
                rel="noreferrer"
                target="_blank"
              >
                <div className="social-icon">
                  <i className="fab fa-twitter" />
                </div>
                <p className="d-none d-lg-flex icon-text ">@somosmas</p>
              </a>
            </div>
            <div className="icon-container">
              <a className="social-link " href="www.instagram.com" rel="noreferrer" target="_blank">
                <div className="social-icon">
                  <i className="fab fa-instagram" />
                </div>
                <p className="d-none d-lg-flex icon-text ">@somosmas</p>
              </a>
            </div>
            <div className="icon-container">
              <a
                className="social-link "
                href="https://www.linkedin.com/in/somos-mas-85b310224/?trk=people-guest_people_search-card&originalSubdomain=ar"
                rel="noreferrer"
                target="_blank"
              >
                <div className="social-icon">
                  <i className="fab fa-linkedin-in" />
                </div>
                <p className="d-none d-lg-flex icon-text ">@somosmas</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row copy mt-3 mt-lg-5 p-0">
        <span>2022 by Alkemy. All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
