import React from "react";
import { Link } from "react-router-dom";

import Error404Image from "./404-image.png";
import AlertIcon from "./alert-icon.png";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="container-fluid container-404">
      <div className="row row-404">
        <div className="container-images">
          <img alt="error-404" className="alert-icon img-fluid" src={AlertIcon} />
          <img alt="error-404" className="error-img img-fluid" src={Error404Image} />
        </div>
      </div>
      <div className="row row-404 mt-2">
        <p className="text-error404">
          Es posible que la página que está buscando se haya eliminado o no esté disponible
          temporalmente.
          <Link className="link-error404" to="/">
            Volver a la página de inicio.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Error404;
