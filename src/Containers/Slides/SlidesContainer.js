import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SlidesList from "../../Components/Slides/SlidesList";
import TitleNav from "../../Components/TitleNav/TitleNav";
import { useDebounceSearch } from "../../hooks/useDebounceSearch";
import SearchInput from "../../Components/SearchInput/SearchInput";
import { fetchSlides, selectorSlides } from "../../features/slides/slidesSlice";

const SlidesContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchValues = useDebounceSearch(searchTerm, 3);
  const { slides } = useSelector(selectorSlides);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchSlides(searchValues));
  }, [dispatch, searchValues]);

  console.log(slides);

  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/slides/create" linkTitle="Crear" title="Slides" />
      <SearchInput
        handleSearch={handleSearch}
        title="Ingresa el nombre del Slide que desea buscar"
      />
      <SlidesList slides={slides} />
    </div>
  );
};

export default SlidesContainer;
