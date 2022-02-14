import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchActivities,
  removeActivity,
  selectorActivities,
} from "../../features/Activities/activitiesSlice";
import ActivitiesList from "../../Components/Activities/Backoffice/ActivitiesList";
import { confirmAlerts, alerts } from "../../utils/alerts";

function ActivitiesListContainer() {
  const { activities } = useSelector(selectorActivities);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    confirmAlerts(
      "¿Estás seguro?",
      `La actividad id: ${id} se eliminará permanentemente`,
      function (response) {
        if (response) {
          dispatch(removeActivity(id))
            .then(() => {
              alerts(`La actividad id: ${id} se eliminó correctamente`, "success");
            })
            .catch(() => {
              alerts(`Ocurrió un error al eliminar la actividad id: ${id} `, "error");
            });
        }
      }
    );
  };

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  return <ActivitiesList data={activities} deleteHandler={deleteHandler} />;
}

export default ActivitiesListContainer;
