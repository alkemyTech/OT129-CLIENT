import React from "react";

import ActivitiesDetail from "./ActivitiesDetail";

const data = {
  id: 1120,
  name: "Prueba",
  slug: null,
  description: "Esta es una actividad de prueba, se reemplazarán luego por las traídas de la API",
  image: "http://ongapi.alkemy.org/storage/hh2Lju770B.png",
  user_id: null,
  category_id: null,
  created_at: "2022-01-23T22:40:41.000000Z",
  updated_at: "2022-01-23T22:40:41.000000Z",
  deleted_at: null,
  group_id: null,
};

const ActivitiesDetailsContainer = () => {
  return (
    <>
      <ActivitiesDetail data={data} />
    </>
  );
};

export default ActivitiesDetailsContainer;
