import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import EditForm from "../../Components/EditForm/EditForm";
import TitleNav from "../../Components/TitleNav/TitleNav";
import { alerts, confirmAlerts } from "../../utils/alerts";
import {
  selectorOrganization,
  newOrganization,
  putOrganization,
} from "../../features/Organization/organizationSlice";

const EditOrganization = () => {
  const { id } = useParams();
  const { organization } = useSelector(selectorOrganization);
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    if (!id) {
      dispatch(newOrganization(data))
        .then(() => {
          alerts(`Organizacion creado correctamente`, "success");
        })
        .catch(() => {
          alerts("Ups! ocurrió un error inesperado al crear el organizacion", "error");
        });
    } else {
      confirmAlerts("¿Estás seguro?", `Se editará el organizacion id: ${id}`, function (response) {
        if (response) {
          dispatch(putOrganization({ data, id: id }))
            .then(() => {
              alerts(`El organizacion id: ${id} se editó correctamente`, "success");
            })
            .catch(() => {
              alerts(`Ocurrió un error al editar el organizacion id: ${id} `, "error");
            });
        }
      });
    }
  };

  return (
    <div className="container mt-3">
      <TitleNav link="/backoffice/organization" linkTitle="Volver" />
      <EditForm handleSubmit={handleSubmit} organization={organization} />
    </div>
  );
};

export default EditOrganization;
