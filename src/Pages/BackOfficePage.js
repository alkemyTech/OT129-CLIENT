import React from "react";
import BackUsers from "../Components/Back/BackUsers";
import dataMock from "./mock-user.json";

const BackOfficePage = () => {
  return <BackUsers data={dataMock} />;
};

export default BackOfficePage;
