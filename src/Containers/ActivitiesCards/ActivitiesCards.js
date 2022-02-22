import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchActivities, selectorActivities } from "../../features/Activities/activitiesSlice";
import Card from "../../Components/Card/Card";
import StatusHandler from "../../Components/StatusHandler/StatusHandler";
import { useDebounceSearch } from "../../hooks/useDebounceSearch";

import styles from "./ActivitiesCards.module.css";

const ActivitiesCards = () => {
  const dispatch = useDispatch();
  const { activities, status } = useSelector(selectorActivities);

  const [wordToSearch, setWordToSearch] = useState("");
  const searchValue = useDebounceSearch(wordToSearch, 3);

  const handleChange = (e) => {
    setWordToSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchActivities(searchValue));
  }, [dispatch, searchValue]);

  return (
    <div className="container my-5">
      <div className="row">
        <div className={styles.activitiesSearchForm}>
          <input
            className={`form-control ${styles.activitiesSearchInput}`}
            name="search"
            placeholder={"Buscar actividad"}
            type="text"
            onChange={handleChange}
          />
        </div>
        <StatusHandler status={status} />
        <div className="container-cards mt-5">
          {activities.length > 0 ? (
            activities.map((el) => (
              <Card
                key={el.id}
                description={el.description}
                id={el.id}
                image={el.image}
                title={el.name}
                url="actividades"
              />
            ))
          ) : (
            <p>No hay actividades</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCards;
