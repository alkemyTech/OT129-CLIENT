import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoriesList from "../../Components/Categories/CategoriesList";
import TitleNav from "../../Components/TitleNav/TitleNav";
import { alerts, confirmAlerts } from "../../utils/alerts";
import {
  fetchCategories,
  removeCategory,
  selectorCategories,
} from "../../features/Categories/categoriesSlice";

const CategoriesListContainer = () => {
  const { categories } = useSelector(selectorCategories);
  const dispatch = useDispatch();
  const onDelete = (id) => {
    confirmAlerts(
      "¿Estás seguro?",
      `La categoría id: ${id} se eliminará permanentemente`,
      function (response) {
        if (response) {
          dispatch(removeCategory(id))
            .then(() => {
              alerts(`La categoría id: ${id} se eliminó correctamente`, "success");
            })
            .catch(() => {
              alerts(`Ocurrió un error al eliminar la categoría id: ${id} `, "error");
            });
        }
      }
    );
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/categories/create" linkTitle="Crear" title="Categorías" />
      <CategoriesList data={categories} onDelete={onDelete} />
    </div>
  );
};

export default CategoriesListContainer;
