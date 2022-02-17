import React from "react";

import onglogo from "../../assets/onglogo.png";
import LogoEscolar from "../../assets/School/LogoEscolar.jpg";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="container my-2 p-2">
      <div className={styles.headerInfo}>
        <img alt="Logo de la campaña" className={styles.logoEscolar} src={LogoEscolar} />
        <p className={styles.slogan}>
          JUNTOS EN LA <span className={styles.spanbreak}>VUELTA AL COLE</span>
        </p>
        <img alt="Logo de la ONG" className={styles.onglogo} src={onglogo} />
      </div>
    </div>
  );
};

export default Header;
