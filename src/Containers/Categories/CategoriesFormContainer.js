import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { toBase64 } from "../../utils/toBase64";
import CategoriesForm from "../../Components/Categories/CategoriesForm";
import { getCategoryById } from "../../Services/CategoriesService";

export const formattedCategory = async (values) => {
  const imageFormatted = await toBase64(values.image);

  const data = {
    id: values.id,
    name: values.name,
    description: values.description,
    image: imageFormatted,
    parent_category_id: values.parent_category_id,
  };

  return data;
};

const CategoriesFormContainer = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({});

  useEffect(() => {
    if (id) {
      getCategoryById(id).then((result) => {
        const response = result.data.data;

        setCategory(response);
      });
    }

    return () => {};
  }, [id]);

  return <CategoriesForm category={category} />;
};

export default CategoriesFormContainer;
