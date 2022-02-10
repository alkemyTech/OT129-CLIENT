import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchActivity, selectorActivities } from "../../../features/Activities/activitiesSlice";
import ActivitiesDetail from "../../../Components/Activities/Detail/ActivitiesDetail";
import StatusHandler from "../../../Components/StatusHandler/StatusHandler";

const ActivitiesDetailsContainer = () => {
  const { id } = useParams();

  const { activity, status } = useSelector(selectorActivities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivity(id));
  }, [dispatch]);

  return (
    <>
      {activity && <ActivitiesDetail data={activity} />}
      <StatusHandler status={status} />
    </>
  );
};

export default ActivitiesDetailsContainer;
