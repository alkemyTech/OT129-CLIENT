import React, { useEffect, useState } from "react";

import ActivitiesDetail from "../../../Components/Activities/Detail/ActivitiesDetail";
import { getActivityByID } from "../../../Services/ActivitiesService";
import { alerts } from "../../../utils/alerts";

const ID = window.location.pathname.split("/")[2];

const ActivitiesDetailsContainer = () => {
  const [activity, setActivity] = useState({
    name: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    getActivityByID(ID)
      .then((res) => {
        const result = res.data.data;

        setActivity(result);
      })
      .catch((_) => {
        alerts("No se pudo obtener los datos de esta actividad", "error");
      });
  }, [ID]);

  return <ActivitiesDetail data={activity} />;
};

export default ActivitiesDetailsContainer;
