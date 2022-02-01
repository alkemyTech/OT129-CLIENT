import React from "react";

import NewsDetails from "./NewsDetails";

const data = {
  id: 1231,
  name: "Apoyo escolar",
  content:
    "Este año hemos abierto aulas de apoyo escolar primario para todos los niños hasta los 12 años.",
  image: "http://ongapi.alkemy.org/storage/h7kk4dTzZZ.jpeg",
};
const NewsDetailsContainer = () => {
  return <NewsDetails data={data} />;
};

export default NewsDetailsContainer;
