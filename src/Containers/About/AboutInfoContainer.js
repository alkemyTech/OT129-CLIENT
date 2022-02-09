import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import AboutInfo from "../../Components/About/AboutInfo";
import {
  fetchOrganization,
  selectorOrganization,
} from "../../features/Organization/organizationSlice";
import Spinner from "../../Components/Spinner/Spinner";
import { alerts } from "../../utils/alerts";

const AboutInfoContainer = () => {
  const dispatch = useDispatch();

  const {
    organization: { long_description },
  } = useSelector(selectorOrganization);

  const { status } = useSelector(selectorOrganization);

  const handleErrors = () => {
    if (status === "loading") {
      return (
        <div className="container">
          <Spinner />
        </div>
      );
    } else if (status === "failed") {
      alerts("Lo sentimos! La infrmación no se encuentra disponible.", "error");
    }
  };

  useEffect(() => {
    dispatch(fetchOrganization());
  }, [dispatch]);

  return (
    <div className="container mt-5 text-center">
      <h3 className="text-uppercase mb-4">Sobre la ONG</h3>
      {long_description && <AboutInfo description={long_description} />}
      {handleErrors()}
    </div>
  );
};

export default AboutInfoContainer;
