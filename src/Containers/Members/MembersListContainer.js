import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchMembers, selectorMembers, removeMember } from "../../features/Members/membersSlice";
import MembersList from "../../Components/Members/MembersList";
import TitleNav from "../../Components/TitleNav/TitleNav";
import { confirmAlerts, alerts } from "../../utils/alerts";
import { useDebounceSearch } from "../../hooks/useDebounceSearch";
import SearchInput from "../../Components/SearchInput/SearchInput";

const MembersListContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchValues = useDebounceSearch(searchTerm, 2);
  const dispatch = useDispatch();
  const { members } = useSelector(selectorMembers);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const onDelete = (id) => {
    confirmAlerts(
      ";Estas Seguro?",
      `El id: ${id} se eliminará permanentemente`,
      function (response) {
        if (response) {
          dispatch(removeMember(id)).then((response) => {
            if (response.error) {
              alerts(`Ocurrió un error al eliminar el id: ${id} `, "error");
            } else {
              alerts(`El id: ${id} se eliminó correctamente`, "success");
            }
          });
        }
      }
    );
  };

  useEffect(() => {
    dispatch(fetchMembers(searchValues));
  }, [dispatch, searchValues]);

  return (
    <div className="container my-5">
      <TitleNav link="/backoffice/members/create" linkTitle="Crear" title="Miembros" />
      <SearchInput
        handleSearch={handleSearch}
        title="Ingresa el nombre del miembro que desea buscar"
      />
      <MembersList data={members} onDelete={onDelete} />
    </div>
  );
};

export default MembersListContainer;
