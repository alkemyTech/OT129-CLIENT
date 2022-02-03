import React from "react";
import PropTypes from "prop-types";

import Card from "../../Components/Card/Card";

const data1 = [
  {
    id: 1,
    name: "Prueba1",
    description: "Esta es una actividad de prueba, se reemplazarán luego por las traídas de la API",
    image: "http://ongapi.alkemy.org/storage/hh2Lju770B.png",
  },
  {
    id: 2,
    name: "Prueba2",
    description: "Esta es una actividad de prueba, se reemplazarán luego por las traídas de la API",
    image: "http://ongapi.alkemy.org/storage/hh2Lju770B.png",
  },
  {
    id: 3,
    name: "PlaceHolder",
    description: "Esta es una actividad de prueba, se reemplazarán luego por las traídas de la API",
    image: "",
  },
  {
    id: 4,
    name: "Prueba4",
    description: "Esta es una actividad de prueba, se reemplazarán luego por las traídas de la API",
    image: "http://ongapi.alkemy.org/storage/hh2Lju770B.png",
  },
];

const NewsCards = ({ data = data1 }) => {
  return (
    <div className="container my-5 d-grid gap-3">
      <div className="row">
        {data.map((el) => (
<<<<<<< HEAD:src/Containers/NewsCards/NewsCards.js
          <div key={el.id} className="col">
            <Card description={el.description} image={el.image} title={el.name} />
=======
          <div key={el.id} className="col-3 mb-4">
            <ShowCard description={el.content} image={el.image} title={el.name} />
>>>>>>> 3272aa1f906322cb74bbea214c896c021a75fbeb:src/Containers/CardContainer/ContainerCard.js
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCards;

NewsCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};
