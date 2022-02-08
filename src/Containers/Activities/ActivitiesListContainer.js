import React, { useEffect, useState } from "react";

import ActivitiesList from "../../Components/Activities/Backoffice/ActivitiesList";
import { getActivities } from "../../Services/ActivitiesService";
import { alerts } from "../../utils/alerts";

function ActivitiesListContainer() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getActivities()
      .then((res) => {
        const result = res.data.data;
        const activities = result.map((activity) => {
          const { id, name, created_at, image } = activity;

          return { id, name, created_at, image };
        });

        setActivities(activities);
      })
      .catch(() => {
        alerts("Ups! ocurrió un error inesperado al solicitar las actividades", "error");
      });
  }, []);

  return <ActivitiesList data={activities} />;
}

export default ActivitiesListContainer;
