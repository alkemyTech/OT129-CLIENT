import React, { useEffect, useState } from "react";

import ActivitiesDetail from "../../../Components/Activities/Detail/ActivitiesDetail";
import { getActivityByID } from "../../../Services/ActivitiesService";

const ID = window.location.pathname.split("/")[2];

const ActivitiesDetailsContainer = () => {
  const [error, setError] = useState(null);
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
      .catch((error) => {
        setError(error);
      });
  }, [ID]);

  return error ? (
    <div className="alert alert-danger">{error.message}</div>
  ) : (
    <ActivitiesDetail data={activity} />
  );
};

export default ActivitiesDetailsContainer;
