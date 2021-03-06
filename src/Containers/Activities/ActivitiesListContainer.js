import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchActivities,
  removeActivity,
  selectorActivities,
} from "../../features/Activities/activitiesSlice";
import { useDebounceSearch } from "../../hooks/useDebounceSearch";
import ActivitiesList from "../../Components/Activities/Backoffice/ActivitiesList";
import { confirmAlerts, alerts } from "../../utils/alerts";
import TitleNav from "../../Components/TitleNav/TitleNav";
import SearchInput from "../../Components/SearchInput/SearchInput";

function ActivitiesListContainer() {
  const [search, setSearch] = useState("");
  const { activities } = useSelector(selectorActivities);
  const dispatch = useDispatch();
  const searchValue = useDebounceSearch(search);
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
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
    dispatch(fetchActivities(searchValue));
  }, [dispatch, searchValue]);

  return (
    <div className="container my-5">
      <TitleNav link="/backoffice/activities/create" linkTitle="Crear" title="Actividades" />
      <SearchInput handleSearch={changeHandler} title="Busca tus actividades por NOMBRE" />
      <ActivitiesList data={activities} deleteHandler={deleteHandler} />
    </div>
  );
}

export default ActivitiesListContainer;
