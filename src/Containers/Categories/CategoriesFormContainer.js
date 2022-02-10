import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CategoriesForm from "../../Components/Categories/CategoriesForm";
import { alerts, confirmAlerts } from "../../utils/alerts";
import {
  fetchCategoryById,
  newCategory,
  putCategory,
  selectorCategories,
} from "../../features/Categories/categoriesSlice";

const CategoriesFormContainer = () => {
  const { id } = useParams();
  const { category } = useSelector(selectorCategories);
  const dispatch = useDispatch();
  const handleSubmit = (data) => {
    if (!id) {
      dispatch(newCategory(data))
        .then(() => {
          alerts(`Categoría creada correctamente`, "success");
        })
        .catch(() => {
          alerts("Ups! ocurrió un error inesperado al crear la categoría", "error");
        });
    } else {
      confirmAlerts(
        "¿Estás seguro?",
        `Se editará la categoría id: ${category.id}`,
        function (response) {
          if (response) {
            dispatch(putCategory({ data, id: category.id }))
              .then(() => {
                alerts(`La categoría id: ${category.id} se editó correctamente`, "success");
              })
              .catch(() => {
                alerts(`Ocurrió un error al editar la categoría id: ${category.id} `, "error");
              });
          }
        }
      );
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchCategoryById(id));
    }
  }, [id]);

  return <CategoriesForm category={category} handleSubmit={handleSubmit} />;
};

export default CategoriesFormContainer;
