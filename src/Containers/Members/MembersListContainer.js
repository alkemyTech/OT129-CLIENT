import React, { useEffect, useState } from "react";

import MembersList from "../../Components/Members/MembersList";
import TitleNav from "../../Components/TitleNav/TitleNav";
import { getMembers } from "../../Services/MembersService";

const MembersListContainer = () => {
  const [dataMembers, setDataMembers] = useState([]);

  useEffect(() => {
    const data = async () => {
      const members = await getMembers();

      setDataMembers(members.data.data);
    };

    data();
  }, []);

  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/members/create" linkTitle="Crear" title="Miembros" />
      <MembersList data={dataMembers} />
    </div>
  );
};

export default MembersListContainer;
