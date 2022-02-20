import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchActivities,
  fetchActivitiesBySearch,
  selectorActivities,
} from "../../features/Activities/activitiesSlice";
import Card from "../../Components/Card/Card";
import StatusHandler from "../../Components/StatusHandler/StatusHandler";

import styles from "./ActivitiesCards.module.css";

const ActivitiesCards = () => {
  const dispatch = useDispatch();
  const { activities, status } = useSelector(selectorActivities);

  const [wordToSearch, setWordToSearch] = useState("");

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  const handleChange = (e) => {
    setWordToSearch(e.target.value);
    if (wordToSearch.length >= 2) {
      dispatch(fetchActivitiesBySearch(wordToSearch));
    } else if (wordToSearch.length < 2) {
      dispatch(fetchActivities());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (wordToSearch.length >= 2) {
      dispatch(fetchActivitiesBySearch(wordToSearch));
    } else if (wordToSearch.length === 0) {
      dispatch(fetchActivities());
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <form className={styles.activitiesSearchForm} onSubmit={handleSubmit}>
          <input
            className={`form-control ${styles.activitiesSearchInput}`}
            name="search"
            placeholder={"Buscar actividad"}
            type="text"
            onChange={handleChange}
          />
          <button className={`general-btn ${styles.activitiesSearchButton}`}>Buscar</button>
        </form>
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
            <p>No hay activiades</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCards;
