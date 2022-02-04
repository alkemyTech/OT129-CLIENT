import React, { useEffect, useState } from "react";

import { getActivities } from "../../../Services/ActivitiesService";

import ActivitiesList from "./ActivitiesList";

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
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <ActivitiesList data={activities} />;
}

export default ActivitiesListContainer;
