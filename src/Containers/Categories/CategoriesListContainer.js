import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoriesList from "../../Components/Categories/CategoriesList";
import TitleNav from "../../Components/TitleNav/TitleNav";
import { alerts, confirmAlerts } from "../../utils/alerts";
import Spinner from "../../Components/Spinner/Spinner";
import {
  fetchCategories,
  removeCategory,
  selectorCategories,
} from "../../features/Categories/categoriesSlice";
import SearchInput from "../../Components/SearchInput/SearchInput";
import { useDebounceSearch } from "../../hooks/useDebounceSearch";

const CategoriesListContainer = () => {
  const [search, setSearch] = useState("");
  const searchValue = useDebounceSearch(search);
  const { categories, status } = useSelector(selectorCategories);

  const dispatch = useDispatch();
  const onDelete = (id) => {
    confirmAlerts(
      "¿Estás seguro?",
      `La categoría id: ${id} se eliminará permanentemente`,
      function (response) {
        if (response) {
          dispatch(removeCategory(id))
            .then(() => {
              alerts(`La categoría id: ${id} se eliminó correctamente`, "success");
            })
            .catch(() => {
              alerts(`Ocurrió un error al eliminar la categoría id: ${id} `, "error");
            });
        }
      }
    );
  };

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchCategories(searchValue));
  }, [dispatch, searchValue]);

  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/categories/create" linkTitle="Crear" title="Categorías" />
      <SearchInput handleSearch={changeHandler} title="Busca tus categorias por NOMBRE" />
      <CategoriesList data={categories} onDelete={onDelete} />
      {status === "loading" ? <Spinner /> : null}
    </div>
  );
};

export default CategoriesListContainer;
