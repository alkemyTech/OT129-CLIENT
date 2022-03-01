import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TestimonialsList from "../../Components/Testimonials/TestimonialsList";
import TitleNav from "../../Components/TitleNav/TitleNav";
import { alerts, confirmAlerts } from "../../utils/alerts";
import {
  fetchTestimonials,
  removeTestimonial,
  selectorTestimonials,
} from "../../features/Testimonials/testimonialsSlice";
import SearchInput from "../../Components/SearchInput/SearchInput";
import { useDebounceSearch } from "../../hooks/useDebounceSearch";

const TestimonialsListContainer = () => {
  const [search, setSearch] = useState("");
  const searchValue = useDebounceSearch(search, 2);

  const { testimonials } = useSelector(selectorTestimonials);
  const dispatch = useDispatch();

  console.table(testimonials);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

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
            .catch((err) => {
              alerts(
                `Ocurrió un error al eliminar el testimonio id: ${id}. Error: ${err}`,
                "error"
              );
            });
        }
      }
    );
  };

  useEffect(() => {
    dispatch(fetchTestimonials(searchValue));
  }, [dispatch, searchValue]);

  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/testimonials/create" linkTitle="Crear" title="Testimonios" />
      <SearchInput handleSearch={handleSearch} title="Busca el nombre del TESTIMONIO" />
      <TestimonialsList data={testimonials} onDelete={onDelete} />
    </div>
  );
};

export default TestimonialsListContainer;
