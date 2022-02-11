import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ActivitiesForm from "../../../Components/Activities/ActivitiesForm";
import {
  fetchActivity,
  putActivity,
  postActivity,
  selectorActivities,
} from "../../../features/Activities/activitiesSlice";
import { confirmAlerts, alerts } from "../../../utils/alerts";

const ActivitiesFormContainer = () => {
  const { id } = useParams();
  const { activity } = useSelector(selectorActivities);
  const dispatch = useDispatch();

  const decideAction = (values) => {
    id
      ? confirmAlerts(
          `Cuidado! Está por editar la actividad con id: ${id}`,
          `Presione OK para continuar`,
          function (response) {
            if (response) {
              dispatch(putActivity({ values, id: activity.id }))
                .then(() => {
                  alerts(`La actividad id: ${id} se editó correctamente`, "success");
                })
                .catch(() => {
                  alerts(`Lo sentimos! La actividad con id: ${id} no pudo ser editada.`, "error");
                });
            }
          }
        )
      : dispatch(postActivity(values))
          .then(() => alerts("La actividad se creó correctamente.", "success"))
          .catch(() => alerts("Lo sentimos. La actividad no pudo ser creada.", "error"));
  };

  useEffect(() => {
    id && dispatch(fetchActivity(id));
  }, [id]);

  return (
    <div>
      <ActivitiesForm activity={activity} decideAction={decideAction} />
    </div>
  );
};

export default ActivitiesFormContainer;
