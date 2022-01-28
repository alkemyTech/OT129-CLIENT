import React from "react";
import BackUsersList from "../Components/Back/BackUsersList";
import dataMock from "./mock-user.json";

const BackOfficePage = () => {
  return <BackUsersList data={dataMock} />;
};

export default BackOfficePage;
