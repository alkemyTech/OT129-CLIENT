import React from "react";

import Titles from "../Components/Titles/Titles";
import ActivitiesCards from "../Containers/ActivitiesCards/ActivitiesCards";

const ActivitiesPage = () => {
  return (
    <div>
      <Titles title="Actividades" />
      <ActivitiesCards />
    </div>
  );
};

export default ActivitiesPage;
