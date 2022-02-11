import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Titles from "../../../Components/Titles/Titles";
import ActivitiesDetail from "../../../Components/Activities/Detail/ActivitiesDetail";
import { getActivityByID } from "../../../Services/ActivitiesService";
import { alerts } from "../../../utils/alerts";

const ActivitiesDetailsContainer = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState({
    id: undefined,
    name: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    getActivityByID(id)
      .then((res) => {
        const result = res.data.data;

        setActivity(result);
      })
      .catch(() => {
        alerts("Ups! ocurrió un error inesperado al solicitar la actividad", "error");
      });
  }, [id]);

  return (
    <>
      <Titles title={activity.name} />
      <ActivitiesDetail data={activity} />;
    </>
  );
};

export default ActivitiesDetailsContainer;
