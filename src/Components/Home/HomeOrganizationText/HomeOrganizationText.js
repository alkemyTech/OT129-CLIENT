import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./HomeOrganizationText.css";

import {
  fetchOrganization,
  selectorOrganization,
} from "../../../features/Organization/organizationSlice";

const HomeOrganizationText = () => {
  const dispatch = useDispatch();
  const { organization } = useSelector(selectorOrganization);

  useEffect(() => {
    dispatch(fetchOrganization());
  }, []);

  const short_description =
    "Nuestra ONG busca mejorar la calidad de vida de niños y familias en situación de vulnerabilidad en el barrio La Cava, otorgando un cambio de rumbo en cada individuo a través de la educación, salud, trabajo, deporte, responsabilidad y compromiso.";

  return (
    <div className="container-fluid container-organization-text">
      <h1 className="text-uppercase text-center organization-title">{organization.name}</h1>
      <h2 className="text-center welcome-text">{organization.welcome_text}</h2>
      <p className="text-center short-description">{short_description}</p>
    </div>
  );
};

export default HomeOrganizationText;
