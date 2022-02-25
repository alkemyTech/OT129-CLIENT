import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NewsForm from "../../Components/News/NewsForm";
import { alerts, confirmAlerts } from "../../utils/alerts";
import { fetchCategories, selectorCategories } from "../../features/Categories/categoriesSlice";
import { fetchNewsById, newNews, putNew, selectorNews } from "../../features/News/news-slice";
import TitleNav from "../../Components/TitleNav/TitleNav";

const NewsContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { _new, status } = useSelector(selectorNews);
  const { categories } = useSelector(selectorCategories);
  const handleSubmit = (data) => {
    if (!id) {
      dispatch(newNews(data)).then((response) => {
        console.log(response);
        if (status === "SUCCESSFUL") {
          alerts(`Novedad creada correctamente`, "success");
        } else if (status === "FAILED") {
          alerts("Ups! ocurrió un error inesperado al crear la novedad", "error");
        }
      });
    } else {
      confirmAlerts(
        "¿Estás seguro?",
        `Se editará la categoría id: ${_new.id}`,
        function (response) {
          if (response) {
            dispatch(putNew({ data, id: _new.id })).then(() => {
              if (status === "SUCCESSFUL") {
                alerts(`La novedad id: ${_new.id} se editó correctamente`, "success");
              } else if (status === "FAILED") {
                alerts(`Ocurrió un error al editar la novedad id: ${_new.id} `, "error");
              }
            });
          }
        }
      );
    }
  };

  useEffect(() => {
    dispatch(fetchCategories());
    if (id) {
      dispatch(fetchNewsById(id));
    }
  }, [id]);

  return (
    <div className="container mt-3">
      <TitleNav link="/backoffice/news" linkTitle="Volver" />
      <NewsForm _new={_new} categories={categories} handleSubmit={handleSubmit} />
    </div>
  );
};

export default NewsContainer;
