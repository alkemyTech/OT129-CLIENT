import React, { useEffect, useState } from "react";

import Organization from "../../Components/Organization/Organization";
import { getOrganizations } from "../../Services/organizationService";

const OrganizationContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getOrganizations().then((res) => {
      res = res.json();
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
