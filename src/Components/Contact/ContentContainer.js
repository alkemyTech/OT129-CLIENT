import React from "react";

import LeaFletContainer from "../../Containers/LeaFlet/LeaFletContainer";

import ContactForm from "./ContactForm";
import styles from "./ContentContainer.module.css";

const ContentContainer = () => {
  return (
    <div className="container d-flex justify-content-between my-5 flex-wrap">
      <div className={styles.formContainer}>
        <p className="mb-4 text-center">
          Si deseas comunicarte con nosotros, dejanos un mensaje y te responderemos a la brevedad.
        </p>
        <ContactForm />
      </div>
      <LeaFletContainer />
    </div>
  );
};

export default ContentContainer;
