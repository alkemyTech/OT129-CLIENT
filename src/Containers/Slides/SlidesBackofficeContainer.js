import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import SlidesForm from "../../Components/Slides/SlidesForm";
import TitleNav from "../../Components/TitleNav/TitleNav";
import { alerts, confirmAlerts } from "../../utils/alerts";
import {
  fetchSlidesById,
  newSlide,
  putSlide,
  selectorSlides,
} from "../../features/slides/slidesSlice";

const SlidesBackofficeContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { slides, slide, status } = useSelector(selectorSlides);

  const handleSubmit = (data) => {
    if (!id) {
      dispatch(newSlide(data)).then(() => {
        if (status === "SUCCESSFUL") {
          alerts(`Slide creado correctamente`, "success");
        } else if (status === "FAILED") {
          alerts("Ups! ocurrió un error inesperado al crear el slide", "error");
        }
      });
    } else {
      confirmAlerts("¿Estás seguro?", `Se editará el slide id: ${id}`, function (response) {
        if (response) {
          dispatch(putSlide({ id: id, ...data })).then(() => {
            if (status === "SUCCESSFUL") {
              alerts(`El slide id: ${id} se editó correctamente`, "success");
            } else if (status === "FAILED") {
              alerts(`Ocurrió un error al editar el slide id: ${id}`, "error");
            }
          });
        }
      });
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchSlidesById(id));
    }
  }, [id]);

  return (
    <div className="container mt-3">
      <TitleNav link="/backoffice/slides" linkTitle="Volver" />
      <SlidesForm handleSubmit={handleSubmit} slide={slide} slides={slides} />
    </div>
  );
};

export default SlidesBackofficeContainer;
