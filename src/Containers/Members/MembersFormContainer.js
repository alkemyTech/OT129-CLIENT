import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import MembersForm from "../../Components/Members/MembersForm";
import { getMemberByID } from "../../Services/MembersService";

const MembersFormContainer = () => {
  const { id } = useParams();
  const [member, setMember] = useState({});

  useEffect(() => {
    if (id) {
      getMemberByID(id).then((result) => {
        const response = result.data.data;

        setMember(response);
      });
    }
  }, [id]);

  return <MembersForm member={member} />;
};

export default MembersFormContainer;
