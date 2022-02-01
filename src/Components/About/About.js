import React, { useEffect, useState } from "react";
import axios from "axios";

import Titles from "../Titles/Titles";

import "./About.css";

const About = () => {
  const [aboutInfo, setAboutInfo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await axios.get("/");

      setAboutInfo(fetchedData);
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="aboutCtn">
        <Titles title="Nosotros" />
        <div className="aboutCtn__info">
          <h3 className="aboutSubTitle">Sobre Nosotros</h3>
          {!aboutInfo ? <p>{aboutInfo}</p> : <p>Próximamente más información sobre nosotros</p>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
