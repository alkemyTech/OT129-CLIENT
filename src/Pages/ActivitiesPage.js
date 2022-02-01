import React from "react";
import PropTypes from "prop-types";

import Titles from "../Components/Titles/Titles";
import ContainerCard from "../Containers/CardContainer/ContainerCard";

const data = [
  {
    name: "Test1",
    description: "Esta es una actividad de prueba, se reemplazarán luego por las traídas de la API",
    image: "http://ongapi.alkemy.org/storage/hh2Lju770B.png",
  },
  {
    name: "Test2",
    description: "Esta es una actividad de prueba, se reemplazarán luego por las traídas de la API",
    image: "http://ongapi.alkemy.org/storage/hh2Lju770B.png",
  },
  {
    name: "Placeholder",
    description: "Esta es una actividad de prueba, se reemplazarán luego por las traídas de la API",
    image: "",
  },
  {
    name: "Test4",
    description: "Esta es una actividad de prueba, se reemplazarán luego por las traídas de la API",
    image: "http://ongapi.alkemy.org/storage/hh2Lju770B.png",
  },
];

const ActivitiesPage = () => {
  return (
    <div>
      <Titles title="Actividades" />
      <ContainerCard data={data} />
    </div>
  );
};

ActivitiesPage.propTypes = {
  data: PropTypes.array,
};
export default ActivitiesPage;
