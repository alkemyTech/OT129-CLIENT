import React, { useEffect, useState } from "react";

import ActivitiesForm from "../../../Components/Activities/ActivitiesForm";
import { getActivities } from "../../../Services/ActivitiesService";

const ActivitiesFormContainer = () => {
  const [activity, setActivity] = useState({
    name: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    getActivities(id)
      .then((response) => {
        const result = response.data.data;

        setActivity(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <h1>{activity?.name}</h1>
      <ActivitiesForm activity={activity} />
    </div>
  );
};

export default ActivitiesFormContainer;
