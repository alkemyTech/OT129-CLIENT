import React, { useEffect, useState } from "react";

import TitleNav from "../../Components/TitleNav/TitleNav";
import CategoriesList from "../../Components/Categories/CategoriesList";
import { getCategories } from "../../Services/CategoriesService";

const CategoriesListContainer = () => {
  const [dataCategories, setDataCategories] = useState([]);

  useEffect(() => {
    const data = async () => {
      const categories = await getCategories();

      setDataCategories(categories.data.data);
    };

    data();
  }, []);

  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/categories/create" linkTitle="Crear" title="Categorías" />
      <CategoriesList data={dataCategories} />
    </div>
  );
};

export default CategoriesListContainer;
