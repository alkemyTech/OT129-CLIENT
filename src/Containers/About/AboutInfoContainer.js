import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import AboutInfo from "../../Components/About/AboutInfo";
import { fetchOrganization, selectorOrganization } from "../../features/About/aboutSlice";

const AboutInfoContainer = () => {
  const dispatch = useDispatch();

  const { long_description } = useSelector(selectorOrganization);

  useEffect(() => {
    dispatch(fetchOrganization());
  }, [dispatch]);

  return (
    <div className="container mt-5 text-center">
      <h3 className="text-uppercase mb-4">Sobre la ONG</h3>
      {long_description && <AboutInfo description={long_description} />}
    </div>
  );
};

export default AboutInfoContainer;
