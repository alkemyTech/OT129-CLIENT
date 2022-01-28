import React from "react";
import PropTypes from "prop-types";

import ContactForm from "./ContactForm";

const ContactPage = (props) => {
  return (
    <div>
      {/* Aca va a ir el componente titulo */}
      {/* <Titulo/> */}
      <h1>Aca va a ir el título de esta pagina</h1>
      {/* Aca van a ir los datos de contacto que vienen por props */}
      <h3>Acá va a ir el contenido de esta pagina</h3>
      {/* <DataContact/> */}
      <ContactForm />
    </div>
  );
};

ContactPage.propTypes = {
  props: PropTypes.array,
};
export default ContactPage;
