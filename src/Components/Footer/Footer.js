import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Footer.css";
import ONGLogo from "../../assets/onglogo.png";

const Footer = ({
  facebook = "https://facebook.com",
  twitter = "https://twitter.com/ONGSomosMas",
  linkedin = "https://linkedin.com/in/somos-mas-85b310224/?trk=people-guest_people_search-card&originalSubdomain=ar",
  instagram = "http://instagram.com",
}) => {
  return (
    <footer className="container-fluid container-footer">
      <div className="container">
        <nav className="nav-footer">
          <Link className="link-nav" to="/actividades">
            Actividades
          </Link>
          <Link className="link-nav" to="/novedades">
            Novedades
          </Link>
          <Link className="link-nav" to="/nosotros">
            Nosotros
          </Link>
          <Link className="link-nav" to="/">
            <img className="logo" src={ONGLogo} />
          </Link>
          <Link className="link-nav" to="/">
            Testimonios
          </Link>
          <Link className="link-nav" to="/donar">
            Contribuye
          </Link>
          <Link className="link-nav" to="/contacto">
            Contacto
          </Link>
        </nav>
        <div className="row row-social">
          <div className="col">
            <div className="social-icon-container">
              <a className="link-social" href={facebook} rel="noreferrer" target="_blank">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="link-social" href={twitter} rel="noreferrer" target="_blank">
                <i className="fab fa-twitter" />
              </a>
              <a className="link-social" href={instagram} rel="noreferrer" target="_blank">
                <i className="fab fa-instagram" />
              </a>
              <a className="link-social" href={linkedin} rel="noreferrer" target="_blank">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
        <div className="row row-copyright">
          <div className="col">
            <span>2022 by Alkemy. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
  linkedin: PropTypes.string,
};

export default Footer;
