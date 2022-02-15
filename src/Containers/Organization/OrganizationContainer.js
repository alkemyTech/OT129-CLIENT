import React, { useEffect, useState } from "react";

import Organization from "../../Components/Organization/Organization";
import { getOrganizations } from "../../Services/OrganizationService";

const OrganizationContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getOrganizations().then((res) => {
      setData(res.data);
    });
  });

  return (
    <>
      <Organization data={data} />
    </>
  );
};

export default OrganizationContainer;
