import React, { useEffect, useState } from "react";

import { getActivities } from "../../Services/ActivitiesService";
import Card from "../../Components/Card/Card";

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
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {activities.map((activity) => (
          <div key={activity.id} className="col">
            <Card description={activity.description} image={activity.image} title={activity.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesCards;
