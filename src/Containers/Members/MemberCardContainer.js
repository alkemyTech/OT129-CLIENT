import React, { useEffect, useState } from "react";

import { getMembers } from "../../Services/MembersService";
import MemberCard from "../../Components/About/MemberCard";
import { alerts } from "../../utils/alerts";
import Spinner from "../../Components/Spinner/Spinner";

const MemberCardContainer = () => {
  const [dataMembers, setDataMembers] = useState([]);
  const [dataExist, setDataExist] = useState(false);
  const [spinnerShow, setSpinnerShow] = useState(true);

  useEffect(() => {
    getMembers()
      .then((response) => {
        setDataMembers(response.data.data);
        setDataExist(true);
        setSpinnerShow(false);
      })
      .catch(() => {
        alerts("Lo sentimos! La información no se encuentra disponible.", "error");
        setSpinnerShow(false);
      });
  }, []);

  return (
    <div className="container my-5">
      <h3 className="text-center mb-5">MIEMBROS</h3>
      {dataExist && <MemberList members={dataMembers} />}
      {spinnerShow && <Spinner />}
    </div>
  );
};

export default MemberCardContainer;
