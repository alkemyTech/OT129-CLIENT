import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SlidesList from "../../Components/Slides/SlidesList";
import TitleNav from "../../Components/TitleNav/TitleNav";
import { useDebounceSearch } from "../../hooks/useDebounceSearch";
import SearchInput from "../../Components/SearchInput/SearchInput";
import { fetchSlides, selectorSlides, removeSlide } from "../../features/slides/slidesSlice";
import { alerts, confirmAlerts } from "../../utils/alerts";

const SlidesContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchValues = useDebounceSearch(searchTerm, 3);
  const { slides, status } = useSelector(selectorSlides);
  const dispatch = useDispatch();
  const onDelete = (id) => {
    confirmAlerts(
      "¿Estás seguro?",
      `El slide id: ${id} se eliminará permanentemente`,
      function (response) {
        if (response) {
          dispatch(removeSlide(id)).then(() => {
            if (status === "SUCCESSFUL") {
              alerts(`El slide novedad id: ${id} se eliminó correctamente`, "success");
            } else if (status === "FAILED") {
              alerts(`Ocurrió un error al eliminar el slide id: ${id} `, "error");
            }
          });
        }
      }
    );
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchSlides(searchValues));
  }, [dispatch, searchValues]);

  return (
    <div className="container my-5">
      <TitleNav link="/backoffice/slides/create" linkTitle="Crear" title="Slides" />
      <SearchInput
        handleSearch={handleSearch}
        title="Ingresa el nombre del Slide que desea buscar"
      />
      <SlidesList slides={slides} onDelete={onDelete} />
    </div>
  );
};

export default SlidesContainer;
