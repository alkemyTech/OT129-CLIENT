import React from "react";
import PropTypes from "prop-types";

import TitleNav from "../../TitleNav/TitleNav";

import ListTable from "./ListTable";

function ActivitiesList({ data, deleteHandler }) {
  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/activities/create" linkTitle="Crear" title="Actividades" />
      <ListTable data={data} deleteHandler={deleteHandler} />
    </div>
  );
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
