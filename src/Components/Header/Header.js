import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectAuth } from "../../features/auth/authSlice";
import { logout } from "../../features/auth/authSlice";
import ONGLogo from "../../assets/onglogo.png";
import { menuPublic } from "../../constants";

import styles from "./Header.module.css";
import MobileNav from "./MobileNav";

const Header = () => {
  const dispatch = useDispatch();
  const {
    auth,
    user: { role_id },
  } = useSelector(selectAuth);

  return (
    <header className={`container my-4 ${styles.header}`}>
      <NavLink to="/">
        <img alt="logo" className="img-fluid " src={ONGLogo} style={{ width: "7rem" }} />
      </NavLink>
      <MobileNav />
      <nav className={styles["nav"]}>
        {menuPublic.map((item) => {
          return (
            <NavLink
              key={item.id.toString()}
              exact
              activeClassName={styles.active}
              className={styles.linkToSection}
              target={item.target}
              to={item.link.toString()}
            >
              {item.name}
            </NavLink>
          );
        })}
        {(!auth || (auth && role_id === 2)) && (
          <NavLink
            exact
            activeClassName={styles.active}
            className={styles.linkToSection}
            to="/contacto"
          >
            Contacto
          </NavLink>
        )}
      </nav>
      <div className={styles.containerButtons}>
        {auth ? (
          <>
            <Link
              className={`stroke-btn text-decoration-none ${styles.iconoBtn}`}
              data-bs-placement="bottom"
              data-bs-toggle="tooltip"
              title="Cerrar Sesión"
              to="/"
              onClick={() => {
                dispatch(logout());
              }}
            >
              <i className="fas fa-sign-out-alt" />
            </Link>
            <Link className="general-btn fill-btn text-decoration-none" to="/backoffice">
              Backoffice
            </Link>
            {role_id === 2 && (
              <Link className="general-btn stroke-btn text-decoration-none" to="/donar">
                Donar
              </Link>
            )}
          </>
        ) : (
          <>
            <Link
              className={`stroke-btn text-decoration-none ${styles.iconoBtn}`}
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
  );
};

export default Header;
