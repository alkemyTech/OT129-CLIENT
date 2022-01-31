import React from "react";

import TitleNav from "../../Components/TitleNav/TitleNav";
import CategoriesList from "../../Components/Categories/CategoriesList";

const dataCategories = [
  {
    id: 1541,
    name: "edit category",
    description: "<p>description</p>",
    image: "http://ongapi.alkemy.org/storage/SKxzZsLtC2.jpeg",
    parent_category_id: null,
    created_at: "2022-01-06T14:47:01.000000Z",
    updated_at: "2022-01-27T00:18:27.000000Z",
    deleted_at: null,
    group_id: null,
  },
  {
    id: 1544,
    name: "cat create",
    description: "asd",
    image: "http://ongapi.alkemy.org/storage/xO1qQ4xAUr.png",
    parent_category_id: null,
    created_at: "2022-01-06T20:13:01.000000Z",
    updated_at: "2022-01-06T20:13:01.000000Z",
    deleted_at: null,
    group_id: null,
  },
  {
    id: 1552,
    name: "probando probando",
    description: "nueva prueba para evidencia",
    image: null,
    parent_category_id: null,
    created_at: "2022-01-07T03:31:07.000000Z",
    updated_at: "2022-01-07T03:31:07.000000Z",
    deleted_at: null,
    group_id: null,
  },
];

const CategoriesListContainer = () => {
  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/categories/create" linkTitle="Crear" title="Categorías" />
      <CategoriesList data={dataCategories} />
    </div>
  );
};

export default CategoriesListContainer;
