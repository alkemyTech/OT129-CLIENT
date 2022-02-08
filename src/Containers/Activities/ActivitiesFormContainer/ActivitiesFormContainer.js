import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ActivitiesForm from "../../../Components/Activities/ActivitiesForm";
import { getActivityByID } from "../../../Services/ActivitiesService";

const ActivitiesFormContainer = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState({
    name: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    getActivityByID(id)
      .then((response) => {
        const result = response.data.data;

        setActivity(result);
      })
      .catch(() => {
        alerts("Ups! ocurrió un error inesperado al solicitar la actividad", "error");
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
