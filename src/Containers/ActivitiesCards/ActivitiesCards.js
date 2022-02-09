import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchActivities, selectorActivities } from "../../features/Activities/activitiesSlice";
import Spinner from "../../Components/Spinner/Spinner";
import Card from "../../Components/Card/Card";

const ActivitiesCards = () => {
  const { activities } = useSelector(selectorActivities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        {activities.length === 0 ? (
          <div className="mt-5">
            <Spinner />
          </div>
        ) : (
          activities.map((activity) => (
            <div key={activity.id} className="col">
              <Card
                description={activity.description}
                id={activity.id}
                image={activity.image}
                title={activity.name}
                url="actividades"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ActivitiesCards;
