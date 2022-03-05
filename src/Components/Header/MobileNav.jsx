import React from "react";
import Popup from "reactjs-popup";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectAuth } from "../../features/auth/authSlice";
import { logout } from "../../features/auth/authSlice";
import { menuPublic } from "../../constants";

import styles from "./MobileNav.module.css";

const MobileNav = () => {
  const dispatch = useDispatch();

  const {
    auth,
    user: { role_id },
  } = useSelector(selectAuth);

  return (
    <Popup
      modal
      trigger={
        <button className={styles.menuButton}>
          <i className="fa fa-bars" />
        </button>
      }
    >
      {(close) => (
        <div className={styles.modalContainer}>
          <button className={styles.closeMenu} onClick={close}>
            <i className="fas fa-times" />{" "}
          </button>
          <nav className={styles.mobileNav}>
            {auth ? (
              <>
                <Link
                  className={styles.authLink}
                  data-bs-placement="bottom"
                  data-bs-toggle="tooltip"
                  title="Cerrar Sesión"
                  to="/"
                  onClick={() => {
                    dispatch(logout());
                    close();
                  }}
                >
                  Logout
                </Link>
                <Link className={styles.authLink} to="/backoffice">
                  Backoffice
                </Link>
                {role_id === 2 && (
                  <Link
                    className="general-btn stroke-btn text-decoration-none"
                    to="/donar"
                    onClick={close}
                  >
                    Donar
                  </Link>
                )}
              </>
            ) : (
              <>
                <Link
                  className={styles.authLink}
                  data-bs-placement="bottom"
                  data-bs-toggle="tooltip"
                  title="Iniciar Sesión"
                  to="/login"
                  onClick={close}
                >
                  Login
                </Link>
                <Link className={styles.authLink} to="/registro" onClick={close}>
                  Registro
                </Link>
              </>
            )}
            <hr className={styles.menuDivider} />
            {menuPublic.map((item) => {
              return (
                <NavLink
                  key={item.id.toString()}
                  exact
                  activeClassName={styles.active}
                  className={styles.navLink}
                  target={item.target}
                  to={item.link.toString()}
                  onClick={close}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </nav>
        </div>
      )}
    </Popup>
  );
};

export default MobileNav;
