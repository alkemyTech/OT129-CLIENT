import React from "react";

import logoNgo from "../../assets/onglogo.png";
import logoCampaign from "../../assets/School/schoolcampaign.png";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="container">
      <div className={styles.headerInfo}>
        <img alt="Logo de la campaña" className={styles.logoCampaign} src={logoCampaign} />
        <p className={styles.slogan}>
          JUNTOS EN LA <span className={styles.spanbreak}>VUELTA AL COLE</span>
        </p>
        <img alt="Logo de la ONG" className={styles.logoNgo} src={logoNgo} />
      </div>
    </div>
  );
};

export default Header;
