import React from "react";
import "./Organization.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Organization = ({ data }) => {
  return (
    <div className="container-bg">
<<<<<<< HEAD
      <div className="container card-bg">
        <h1 className="pb-2">Organización</h1>
        <div className="d-flex flex-column align-items-start">
          <h5 className="text-center">
            <b>Nombre: </b>
            {dataMock.name}
          </h5>
          <div className="d-flex align-items-center">
            <h5 className="text-center">
              <b>Imágen: </b>
            </h5>
            <img src={dataMock.image} alt={dataMock.name} />
=======
      <h1 className="pb-2">Organización</h1>
      <div className="container card-bg">
        <div className="d-flex flex-column">
          <h2 className="text-center">{data.name}</h2>
          <div className="d-flex justify-content-center">
            <img alt={data.name} src={data.image} />
>>>>>>> 2ef509bde12f3834ad27713c285679a1ef8b6c7e
          </div>
          <h5 className="text-center">{data.shortDescription}</h5>
        </div>
        <div className="d-flex justify-content-between my-3">
          <Link
            className="btn btn-secondary "
            to={"falta agregar la ruta o algún método para volver"}
          >
            Volver
          </Link>
          <Link className="btn btn-primary " to="/backoffice/organization/edit">
            Editar
          </Link>
        </div>
      </div>
    </div>
  );
};

Organization.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default Organization;
