import React from "react";

import BackUsersList from "../Components/Users/BackUsersList";

const dataMock = [
  {
    id: 1,
    name: "Matias",
    email: "matias@matias.com",
  },
  {
    id: 2,
    name: "Enzo",
    email: "enzo@enzo.com",
  },
  {
    id: 3,
    name: "Franco",
    email: "franco@franco.com",
  },
  {
    id: 4,
    name: "Julian",
    email: "julian@julian.com",
  },
  {
    id: 5,
    name: "Robert",
    email: "robert@robert.com",
  },
];

const BackOfficeUserPage = () => {
  const linkUrl = "/backoffice/users/create";

  return <BackUsersList data={dataMock} linkUrl={linkUrl} />;
};

export default BackOfficeUserPage;
