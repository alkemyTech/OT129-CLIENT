import React from "react";
import PropTypes from "prop-types";

import ListTable from "./ListTable";

function ActivitiesList({ data, deleteHandler }) {
  return <ListTable data={data} deleteHandler={deleteHandler} />;
}

ActivitiesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      image: PropTypes.string,
      created_at: PropTypes.string,
    })
  ),
  deleteHandler: PropTypes.func,
};

export default ActivitiesList;
