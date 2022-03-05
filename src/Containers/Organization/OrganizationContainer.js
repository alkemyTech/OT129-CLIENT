import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Organization from "../../Components/Organization/Organization";
import {
  fetchOrganization,
  selectorOrganization,
} from "../../features/Organization/organizationSlice";

const OrganizationContainer = () => {
  const dispatch = useDispatch();
  const { organization } = useSelector(selectorOrganization);

  useEffect(() => {
    dispatch(fetchOrganization());
  }, [dispatch]);

  return <>{organization && <Organization data={organization} />}</>;
};

export default OrganizationContainer;
