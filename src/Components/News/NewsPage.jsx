import React from "react";

import TitleNav from "../TitleNav/TitleNav";

import NewsTable from "./NewsTable";

const news = [
  {
    id: 1231,
    name: "Apoyo escolar",
    slug: null,
    content:
      "<p>Este año hemos abierto aulas de apoyo escolar primario para todos los niños hasta los 12 años.</p>",
    image: "http://ongapi.alkemy.org/storage/gGrvMkykLf.jpeg",
    user_id: null,
    category_id: 1454,
    created_at: "2022-01-03T16:21:43.000000Z",
    updated_at: "2022-01-03T16:21:43.000000Z",
    deleted_at: null,
  },
  {
    id: 1239,
    name: "Somos 1 millon",
    slug: null,
    content:
      "<p>Hemos llegado a 1 millon de seguidores en Instagram. Gracias por el apoyo. Continuaremos ayudando a los niños para hacer de este mundo un mejor lugar.</p>",
    image: "http://ongapi.alkemy.org/storage/UHfYcDwqgB.jpeg",
    user_id: null,
    category_id: 1454,
    created_at: "2022-01-03T18:41:30.000000Z",
    updated_at: "2022-01-04T12:55:40.000000Z",
    deleted_at: null,
  },
  {
    id: 1240,
    name: "Juguetes para navidad",
    slug: null,
    content:
      "<p>Estas navidades no nos hemos olvidado de los juguetes. Sostenemos que todos los niños deben tener acceso a sus necesidades basicas y tener derecho a divertirse, por este motivo es que estamos juntando juguetes.</p>",
    image: "http://ongapi.alkemy.org/storage/BhE27SCowD.png",
    user_id: null,
    category_id: 1454,
    created_at: "2022-01-03T18:43:59.000000Z",
    updated_at: "2022-01-03T18:43:59.000000Z",
    deleted_at: null,
  },
  {
    id: 1241,
    name: "Colecta de alimentos no perecederos",
    slug: null,
    content:
      "<p>Hasta el dia 20 de enero de 2022 estaremos recolectando alimentos para ayudar a la ONG 'juntos somos mejores' para brindar meriendas nutritivas durante todo el mes siguiente.</p>",
    image: "http://ongapi.alkemy.org/storage/I7X9Lxhdtk.jpeg",
    user_id: null,
    category_id: 1454,
    created_at: "2022-01-03T18:46:47.000000Z",
    updated_at: "2022-01-03T18:46:47.000000Z",
    deleted_at: null,
  },
  {
    id: 1242,
    name: "Dia de reyes.",
    slug: null,
    content:
      "<p>Este mes, en el dia de los reyes magos te esperamos, trae tu taza, galletitas y bebida, para festejar el dia de reyes. Al final del dia estaremos sorteando una canasta con dulces.</p>",
    image: "http://ongapi.alkemy.org/storage/KwsJAbv3tN.jpeg",
    user_id: null,
    category_id: 1454,
    created_at: "2022-01-03T18:49:17.000000Z",
    updated_at: "2022-01-03T19:31:33.000000Z",
    deleted_at: null,
  },
  {
    id: 1244,
    name: "Colecta de juguetes",
    slug: null,
    content:
      "<p>Se realizo la primera colecta de juguetes de Somos Mas, fue todo un exito, los chicos felices y la organizacion muy agradecida por el exito de este primer encuentro.</p>",
    image: "http://ongapi.alkemy.org/storage/MF5dtxhCmX.jpeg",
    user_id: null,
    category_id: null,
    created_at: "2022-01-04T04:29:33.000000Z",
    updated_at: "2022-01-04T04:29:33.000000Z",
    deleted_at: null,
  },
];

const NewsPage = () => {
  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/news/create" linkTitle="Crear" title="Novedades" />
      <NewsTable news={news} />
    </div>
  );
};

export default NewsPage;
