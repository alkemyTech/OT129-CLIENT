import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TestimonialsList from "../../Components/Testimonials/TestimonialsList";
import TitleNav from "../../Components/TitleNav/TitleNav";
import { alerts, confirmAlerts } from "../../utils/alerts";
import Spinner from "../../Components/Spinner/Spinner";
import {
  fetchTestimonials,
  removeTestimonial,
  selectorTestimonials,
} from "../../features/Testimonials/testimonialsSlice";

const TestimonialsListContainer = () => {
  const { testimonials, status } = useSelector(selectorTestimonials);

  const dispatch = useDispatch();
  const onDelete = (id) => {
    confirmAlerts(
      "¿Estás seguro?",
      `El testimonio id: ${id} se eliminará permanentemente`,
      function (response) {
        if (response) {
          dispatch(removeTestimonial(id))
            .then(() => {
              alerts(`El testimonio id: ${id} se eliminó correctamente`, "success");
            })
            .catch((response) => {
              console.log(response);
              alerts(`Ocurrió un error al eliminar el testimonio id: ${id} `, "error");
            });
        }
      }
    );
  };

  useEffect(() => {
    dispatch(fetchTestimonials());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/testimonials/create" linkTitle="Crear" title="Testimonios" />
      <TestimonialsList data={testimonials} onDelete={onDelete} />
      {status === "loading" ? <Spinner /> : null}
    </div>
  );
};

export default TestimonialsListContainer;
