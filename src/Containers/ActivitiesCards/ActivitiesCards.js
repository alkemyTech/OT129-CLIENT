import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchActivities, selectorActivities } from "../../features/Activities/activitiesSlice";
import Card from "../../Components/Card/Card";
import StatusHandler from "../../Components/StatusHandler/StatusHandler";

const ActivitiesCards = () => {
  const dispatch = useDispatch();
  const { activities, status } = useSelector(selectorActivities);

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  return (
    <div className="container my-5">
      <div className="row">
        <StatusHandler status={status} />
        <div className="container-cards">
          {activities &&
            activities.map((el) => (
              <Card
                key={el.id}
                description={el.description}
                id={el.id}
                image={el.image}
                title={el.name}
                url="actividades"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCards;
