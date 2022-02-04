import React from "react";
import PropTypes from "prop-types";

import TitleNav from "../../TitleNav/TitleNav";

import ListTable from "./ListTable";

function ActivitiesList({ data }) {
  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/activities/create" linkTitle="Crear" title="Actividades" />
      <ListTable data={data} />
    </div>
  );
}

ActivitiesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ActivitiesList;
