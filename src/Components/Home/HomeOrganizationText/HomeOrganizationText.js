import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./HomeOrganizationText.css";
import DangerouslySetInnerHTML from "../../DangerouslySetInnerHTML/DangerouslySetInnerHTML";
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

  return (
    <div className="container container-organization-text">
      <h1 className="text-uppercase text-center organization-title">{organization.name}</h1>
      <h2 className="text-center welcome-text">{organization.welcome_text}</h2>
      <p className="text-center short-description">
        <DangerouslySetInnerHTML content={organization.short_description} />
      </p>
    </div>
  );
};

export default HomeOrganizationText;
