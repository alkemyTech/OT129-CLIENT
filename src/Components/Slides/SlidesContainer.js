import React from "react";

import TitleNav from "../TitleNav/TitleNav";

import SlidesList from "./SlidesList";

const slides = [
  {
    id: 865,
    name: "Ignacio",
    description: "<p>asdasdas</p>",
    image: "http://ongapi.alkemy.org/storage/j8Uo4skOTP.jpeg",
    order: 5454,
    user_id: null,
    created_at: "2022-01-27T04:31:35.000000Z",
    updated_at: "2022-01-27T04:31:35.000000Z",
    deleted_at: null,
    group_id: null,
  },
  {
    id: 866,
    name: "Ignacio",
    description: "<p>dfsfsd</p>",
    image: "http://ongapi.alkemy.org/storage/rEZJhWbxCx.jpeg",
    order: 8989,
    user_id: null,
    created_at: "2022-01-27T04:58:27.000000Z",
    updated_at: "2022-01-27T04:58:27.000000Z",
    deleted_at: null,
    group_id: null,
  },
  {
    id: 868,
    name: "Titulo de prueba",
    description: "<p>fdes</p>",
    image: "http://ongapi.alkemy.org/storage/tRMcq6w2JV.jpeg",
    order: 1,
    user_id: null,
    created_at: "2022-01-27T20:29:02.000000Z",
    updated_at: "2022-01-27T20:29:02.000000Z",
    deleted_at: null,
    group_id: null,
  },
];

const SlidesContainer = () => {
  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/slides/create" linkTitle="Crear" title="Slides" />
      <SlidesList slides={slides} />
    </div>
  );
};

export default SlidesContainer;
