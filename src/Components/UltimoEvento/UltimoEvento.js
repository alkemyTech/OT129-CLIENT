import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player/youtube";

const UltimoEvento = ({ title = "Ultimo Evento" }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center banner py-5">
      <div className="row justify-content-center">
        <h2 className="mb-5 title-banner">{title}</h2>
        <ReactPlayer controls url={"https://www.youtube.com/watch?v=4YnSk1gI_Oo"} volume="0 a 1" />
      </div>
    </div>
  );
};

UltimoEvento.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default UltimoEvento;
