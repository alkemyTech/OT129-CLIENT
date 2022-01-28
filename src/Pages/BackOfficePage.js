import React from "react";

import BackUsersList from "../Components/Back/BackUsersList";

import dataMock from "./mock-user.json";

const BackOfficePage = () => {
  const linkUrl = "/backoffice/users/create";

  return <BackUsersList data={dataMock} linkUrl={linkUrl} />;
};

export default BackOfficePage;
