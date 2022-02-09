import React from "react";

import logoNgo from "../../assets/ngologo.png";
import logoCampaign from "../../assets/Toys/toyscampaign.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerCtn}>
      <div className={styles.headerInfo}>
        <img alt="Logo de la campaña" className={styles.logoCampaign} src={logoCampaign} />
        <img alt="Logo de la ONG" className={styles.logoNgo} src={logoNgo} />
      </div>
    </div>
  );
};

export default Header;
