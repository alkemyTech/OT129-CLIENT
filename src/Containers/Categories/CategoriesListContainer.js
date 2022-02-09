import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TitleNav from "../../Components/TitleNav/TitleNav";
import { fetchCategories, selectorCategories } from "../../features/Categories/categoriesSlice";
import CategoriesList from "../../Components/Categories/CategoriesList";

const CategoriesListContainer = () => {
  const { categories } = useSelector(selectorCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/categories/create" linkTitle="Crear" title="Categorías" />
      <CategoriesList data={categories} />
    </div>
  );
};

export default CategoriesListContainer;
