import React from "react";
import PropTypes from "prop-types";

import ShowCard from "./ShowCard";

const data1 = [
  {
    name: "Prueba1",
    description: "Esta es una actividad de prueba, se reemplazarán luego por las traídas de la API",
    image: "http://ongapi.alkemy.org/storage/hh2Lju770B.png",
  },
  {
    name: "Prueba2",
    description: "Esta es una actividad de prueba, se reemplazarán luego por las traídas de la API",
    image: "http://ongapi.alkemy.org/storage/hh2Lju770B.png",
  },
  {
    name: "PlaceHolder",
    description: "Esta es una actividad de prueba, se reemplazarán luego por las traídas de la API",
    image: "",
  },
  {
    name: "Prueba4",
    description: "Esta es una actividad de prueba, se reemplazarán luego por las traídas de la API",
    image: "http://ongapi.alkemy.org/storage/hh2Lju770B.png",
  },
];

const ContainerCard = ({ data = data1 }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map((el) => (
          <div key={el.id} className="col">
            <ShowCard description={el.description} image={el.image} title={el.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContainerCard;

ContainerCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};
