import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchNews, removeNew, selectorNews } from "../../features/News/news-slice";
import TitleNav from "../TitleNav/TitleNav";
import { useDebounceSearch } from "../../hooks/useDebounceSearch";
import SearchInput from "../SearchInput/SearchInput";
import { alerts, confirmAlerts } from "../../utils/alerts";

import NewsTable from "./NewsTable";

const NewsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchValues = useDebounceSearch(searchTerm);
  const { news, status } = useSelector(selectorNews);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const onDelete = (id) => {
    confirmAlerts(
      "¿Estás seguro?",
      `La novedad id: ${id} se eliminará permanentemente`,
      function (response) {
        if (response) {
          dispatch(removeNew(id)).then(() => {
            if (status === "SUCCESSFUL") {
              alerts(`La novedad id: ${id} se eliminó correctamente`, "success");
            } else if (status === "FAILED") {
              alerts(`Ocurrió un error al eliminar la novedad id: ${id} `, "error");
            }
          });
        }
      }
    );
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
      <NewsTable news={news} onDelete={onDelete} />
    </div>
  );
};

export default NewsList;
