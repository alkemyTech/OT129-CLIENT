import React from "react";
import PropTypes from "prop-types";

import { toBase64 } from "../../utils/toBase64";
import CategoriesForm from "../../Components/Categories/CategoriesForm";

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
