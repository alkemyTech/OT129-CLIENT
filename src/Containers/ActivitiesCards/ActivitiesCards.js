import React, { useEffect, useState } from "react";

import Spinner from "../../Components/Spinner/Spinner";
import { getActivities } from "../../Services/ActivitiesService";
import Card from "../../Components/Card/Card";
import { alerts } from "../../utils/alerts";

const ActivitiesCards = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getActivities()
      .then((response) => {
        const result = response.data.data;
        const activities = result.map((activity) => {
          const { id, image, name, description } = activity;

          return { id, image, name, description };
        });

        setActivities(activities);
      })
      .catch((_) => {
        alerts("No se pudo obtener el listado de actividades", "error");
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {activities.length === 0 ? (
          <div className="mt-5">
            <Spinner />
          </div>
        ) : (
          activities.map((activity) => (
            <div key={activity.id} className="col mt-3 mb-1">
              <Card
                description={activity.description}
                image={activity.image}
                title={activity.name}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ActivitiesCards;
