import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchOrganization,
  selectorOrganization,
} from "../../features/Organization/organizationSlice";
import LeaFlet from "../../Components/Leaflet/LeaFlet";

import styles from "./LeaFletContainer.module.css";

const position = [4.6689404, -74.062345];

const LeaFletContainer = () => {
  const { organization } = useSelector(selectorOrganization);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrganization());
  }, []);

  return (
    <div className={styles.leaFletContainer}>
      <LeaFlet address={organization.address} position={position} />
      <p>Dirección: Cra. 22 ## 80-73, Bogotá, Colombia</p>
      <p>Email: somosfundacionmas@gmail.com</p>
      <p>Teléfono: 1160112988</p>
    </div>
  );
};

export default LeaFletContainer;
