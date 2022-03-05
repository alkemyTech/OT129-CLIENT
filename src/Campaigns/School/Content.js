import React from "react";

import { formatDateWithTime } from "../../utils/formatDate";

import styles from "./content.module.css";
import imageA from "./images/content-option-1.png";
import imageB from "./images/content-option-2.png";
import imageC from "./images/logo-materials.png";

const date = new Date();
const campaignDate = new Date(date.getTime() + 864000000 + 364);
const formatedDate = formatDateWithTime(campaignDate);
const difference = campaignDate.getTime() - date.getTime();

const address = "Barrio La Cava, Buenos Aires";

const daysLeft = Math.floor(difference / 86400000);
const hsLeft = Math.floor((difference - daysLeft * 86400000) / 60);
const minLeft = Math.floor((difference - daysLeft * 86400000 - hsLeft * 60) / 60);

const Content = () => {
  return (
    <div className={`container py-4 ${styles["bg-container"]}`}>
      <p className="fs-3 text text-center">{`${formatedDate} ${address}`} </p>
      <div className="d-flex justify-content-between align-items-center">
        <img
          alt="campaing-representative-image"
          className={`${styles["image-tilted-left"]} ${styles["content-image"]}`}
          src={imageA}
        />
        <span className={`text-center fs-3 fw-bolder m-auto ${styles["countdown-text"]}`}>
          Te quedan: {daysLeft !== 0 && daysLeft + " días"} {hsLeft !== 0 && hsLeft + "h"}{" "}
          {minLeft !== 0 && minLeft + "m"} para participar
        </span>
        <img
          alt="campaing-representative-image1"
          className={`${styles["image-tilted-right"]} ${styles["content-image"]}`}
          src={imageB}
        />
      </div>
      <p className={`fs-5 text-center mt-4 mb-5 ${styles.paragraph}`}>
        Con el objetivo de recolectar materiales escolares para ayudar a los chicos y chicas de la
        comunidad en el inicio de un nuevo ciclo lectivo, iniciamos ésta campaña de útiles escolar.
        Si querés colaborar podés escribirnos un mensaje o seguirnos en nuestras redes sociales
        donde comunicaremos todas las novedades.
      </p>
      <div
        className={`px-3 d-flex justify-content-between align-items-center ${styles["images-bottom-container"]}`}
      >
        <img
          alt="campaing-representative-image2"
          className={`${styles["image-tilted-left-bottom"]} ${styles["content-image"]}`}
          src={imageB}
        />
        <img
          alt="campaing-representative-image3"
          className={`${styles["image-tilted-center-bottom"]} ${styles["content-image"]}`}
          src={imageC}
        />
        <img
          alt="campaing-representative-image4"
          className={`${styles["image-tilted-right-bottom"]} ${styles["content-image"]}`}
          src={imageA}
        />
      </div>
    </div>
  );
};

export default Content;
