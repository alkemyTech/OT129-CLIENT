import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchActivities, selectorActivities } from "../../features/Activities/activitiesSlice";
import ActivitiesList from "../../Components/Activities/Backoffice/ActivitiesList";

function ActivitiesListContainer() {
  const { activities } = useSelector(selectorActivities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  return <ActivitiesList data={activities} />;
}

export default ActivitiesListContainer;
