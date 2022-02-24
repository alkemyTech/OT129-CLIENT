import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TestimonialsForm from "../../Components/Testimonials/TestimonialsForm";
import { alerts, confirmAlerts } from "../../utils/alerts";
import {
  fetchTestimonialById,
  newTestimonial,
  putTestimonial,
  selectorTestimonials,
} from "../../features/Testimonials/testimonialsSlice";

const TestimonialsFormContainer = () => {
  const { id } = useParams();
  const { testimonial } = useSelector(selectorTestimonials);
  const dispatch = useDispatch();
  const handleSubmit = (data) => {
    if (!id) {
      dispatch(newTestimonial(data))
        .then(() => {
          alerts(`Testimonio creado correctamente`, "success");
        })
        .catch(() => {
          alerts("Ups! ocurrió un error inesperado al crear el testimonio", "error");
        });
    } else {
      confirmAlerts("¿Estás seguro?", `Se editará el testimonio id: ${id}`, function (response) {
        if (response) {
          dispatch(putTestimonial({ data, id: id }))
            .then(() => {
              alerts(`El testimonio id: ${id} se editó correctamente`, "success");
            })
            .catch(() => {
              alerts(`Ocurrió un error al editar el testimonio id: ${id} `, "error");
            });
        }
      });
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchTestimonialById(id));
    }
  }, [id]);

  return <TestimonialsForm handleSubmit={handleSubmit} testimonial={testimonial} />;
};

export default TestimonialsFormContainer;
