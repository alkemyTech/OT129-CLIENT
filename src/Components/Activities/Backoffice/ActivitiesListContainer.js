import React from "react";

import ActivitiesIndex from "./ActivitiesList";

const activities = [
  {
    id: 1072,
    name: "Recoleccion de alimentos",
    slug: null,
    description:
      "<p><strong>Estaremos recolectando alimentos no perecederos para donar al comedor infantil del barrio La Cava</strong></p>",
    image: "http://ongapi.alkemy.org/storage/kOZJA3MnBc.jpeg",
    user_id: null,
    category_id: null,
    created_at: "2022-01-05T04:00:49.000000Z",
    updated_at: "2022-01-25T18:28:00.000000Z",
    deleted_at: null,
    group_id: null,
  },
  {
    id: 1114,
    name: "Recoleccion de juguetes",
    slug: null,
    description: "<p>asdasdasd</p>",
    image: "http://ongapi.alkemy.org/storage/H6haRFU2Xa.jpeg",
    user_id: null,
    category_id: null,
    created_at: "2022-01-18T18:42:38.000000Z",
    updated_at: "2022-01-18T18:42:38.000000Z",
    deleted_at: null,
    group_id: null,
  },
  {
    id: 1115,
    name: "Comedor",
    slug: null,
    description: "<p>asdasd</p>",
    image: "http://ongapi.alkemy.org/storage/6dQ4HnK8aq.jpeg",
    user_id: null,
    category_id: null,
    created_at: "2022-01-18T18:44:18.000000Z",
    updated_at: "2022-01-18T18:44:18.000000Z",
    deleted_at: null,
    group_id: null,
  },
  {
    id: 1116,
    name: "asd",
    slug: null,
    description: "<p>asd</p>",
    image: "http://ongapi.alkemy.org/storage/8TzCBYbsHf.jpeg",
    user_id: null,
    category_id: null,
    created_at: "2022-01-20T14:36:50.000000Z",
    updated_at: "2022-01-24T09:15:31.000000Z",
    deleted_at: null,
    group_id: null,
  },
  {
    id: 1117,
    name: "probando",
    slug: null,
    description: "<p>probando</p>",
    image: null,
    user_id: null,
    category_id: null,
    created_at: "2022-01-22T11:46:06.000000Z",
    updated_at: "2022-01-22T11:46:06.000000Z",
    deleted_at: null,
    group_id: null,
  },
  {
    id: 1118,
    name: "probando1",
    slug: null,
    description: "<p>probando1</p>",
    image: "http://ongapi.alkemy.org/storage/BlqMA5ZjCC.jpeg",
    user_id: null,
    category_id: null,
    created_at: "2022-01-22T12:23:03.000000Z",
    updated_at: "2022-01-22T12:23:03.000000Z",
    deleted_at: null,
    group_id: null,
  },
  {
    id: 1119,
    name: "pikachu",
    slug: null,
    description: "<p>pikachu</p>",
    image: "http://ongapi.alkemy.org/storage/jMsLwcScXq.jpeg",
    user_id: null,
    category_id: null,
    created_at: "2022-01-22T12:30:46.000000Z",
    updated_at: "2022-01-23T22:43:45.000000Z",
    deleted_at: null,
    group_id: null,
  },
];

function ActivitiesIndexContainer() {
  return <ActivitiesIndex data={activities} />;
}

export default ActivitiesIndexContainer;
