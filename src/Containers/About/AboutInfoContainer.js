import React, { useEffect, useState } from "react";

import AboutInfo from "../../Components/About/AboutInfo";
import Spinner from "../../Components/Spinner/Spinner";
import { getOrganizations } from "../../Services/organizationService";
import { alerts } from "../../utils/alerts";

const AboutInfoContainer = () => {
  const [dataAboutUs, setDataAboutUs] = useState("");
  const [dataExist, setDataExist] = useState(false);
  const [spinnerShow, setSpinnerShow] = useState(true);

  useEffect(() => {
    getOrganizations()
      .then((response) => {
        setDataAboutUs(response.data.data.long_description);
        setDataExist(true);
        setSpinnerShow(false);
      })
      .catch(() => {
        alerts("Lo sentimos! La información no se encuentra disponible.", "error");
        setSpinnerShow(false);
      });
  }, []);

  return (
    <div className="container mt-5 text-center">
      <h3 className="text-uppercase mb-4">Sobre la ONG</h3>
      {dataExist && <AboutInfo description={dataAboutUs} />}
      {spinnerShow && <Spinner />}
    </div>
  );
};

export default AboutInfoContainer;
