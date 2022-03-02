import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import AboutInfo from "../../Components/About/AboutInfo";
import StatusHandler from "../../Components/StatusHandler/StatusHandler";
import {
  fetchOrganization,
  selectorOrganization,
} from "../../features/Organization/organizationSlice";

const AboutInfoContainer = () => {
  const dispatch = useDispatch();

  const {
    organization: { long_description },
  } = useSelector(selectorOrganization);

  const { status } = useSelector(selectorOrganization);

  useEffect(() => {
    dispatch(fetchOrganization());
  }, [dispatch]);

  return (
    <div className="container mt-5 text-center">
      <h3 className="text-uppercase mb-5">Sobre la ONG</h3>
      {long_description && <AboutInfo description={long_description} />}
      <StatusHandler status={status} />
    </div>
  );
};

export default AboutInfoContainer;
