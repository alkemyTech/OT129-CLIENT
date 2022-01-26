import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import CategoriesForm from "../../Components/Categories/CategoriesForm";

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

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

export const updateCategory = async (data) => {
  try {
    const id = data.id;
    const response = await axios.put(`http://ongapi.alkemy.org/api/categories/${id}`, data);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const createCategory = async (data) => {
  console.log(data);

  try {
    const response = await axios.post("http://ongapi.alkemy.org/api/categories", data);
  } catch (error) {
    console.log(error.response.data);
  }
};

function CategoriesContainer({ category }) {
  const initialValues = {
    id: category?.id || undefined,
    name: category?.name || "",
    description: category?.description || "",
    image: category?.image || "",
    parent_category_id: category?.parent_category_id || undefined,
  };

  return <CategoriesForm initialValues={initialValues} />;
}

CategoriesContainer.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    parent_category_id: PropTypes.number,
  }),
};

export default CategoriesContainer;
