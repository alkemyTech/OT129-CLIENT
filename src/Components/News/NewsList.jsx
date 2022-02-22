import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchNews, selectorNews } from "../../features/News/news-slice";
import TitleNav from "../TitleNav/TitleNav";
import { useDebouceSearch } from "../../hooks/useDebouceSearch";
import SearchInput from "../SearchInput/SearchInput";

import NewsTable from "./NewsTable";

const NewsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchValues = useDebouceSearch(searchTerm, 400);
  const { news } = useSelector(selectorNews);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchNews(searchValues));
  }, [dispatch, searchValues]);

  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/news/create" linkTitle="Crear" title="Novedades" />
      <SearchInput
        handleSearch={handleSearch}
        title="Ingresa el nombre de la novedad que desea buscar"
      />
      <NewsTable news={news} />
    </div>
  );
};

export default NewsList;
