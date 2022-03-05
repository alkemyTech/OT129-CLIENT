import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player/youtube";

const LastEvent = ({ title = "Ultimo Evento" }) => {
  return (
    <div className="container justify-content-center align-items-center banner mb-5">
      <div className="row justify-content-center">
        <h2 className="mb-5 text-uppercase fw-bold">{title}</h2>
        <ReactPlayer controls url={"https://www.youtube.com/watch?v=4YnSk1gI_Oo"} />
      </div>
    </div>
  );
};

LastEvent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default LastEvent;
