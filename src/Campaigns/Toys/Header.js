import React from "react";

import logoNgo from "../../assets/onglogo.png";
import logoCampaign from "../../assets/Toys/toyscampaign.png";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="container my-2 p-2">
      <div className={styles.headerInfo}>
        <img alt="Logo de la campaña" className={styles.logoCampaign} src={logoCampaign} />
        <p className={styles.slogan}>
          JUGUETES POR <span className={styles.spanbreak}>MÁS SONRISAS</span>
        </p>
        <img alt="Logo de la ONG" className={styles.logoNgo} src={logoNgo} />
      </div>
    </div>
  );
};

export default Header;
