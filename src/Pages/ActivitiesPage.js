import React from "react";
import PropTypes from "prop-types";

import Titles from "../Components/Titles/Titles";
import ContainerCard from "../Containers/CardContainer/ContainerCard";

const ActivitiesPage = () => {
  return (
    <div>
      <Titles title="Actividades" />
      <ContainerCard />
    </div>
  );
};

ActivitiesPage.propTypes = {
  data: PropTypes.array,
};
export default ActivitiesPage;
