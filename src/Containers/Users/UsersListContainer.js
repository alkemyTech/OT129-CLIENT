import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useDebounceSearch } from "../../hooks/useDebounceSearch";
import { fetchUsers, removeUser, selectorUsers } from "../../features/user/users-slice";
import BackUsersList from "../../Components/Users/BackUsersList";
import TitleNav from "../../Components/TitleNav/TitleNav";
import { confirmAlerts, alerts } from "../../utils/alerts";
import SearchInput from "../../Components/SearchInput/SearchInput";

const UsersListContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchValues = useDebounceSearch(searchTerm, 2);
  const { users } = useSelector(selectorUsers);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const onDelete = (id) => {
    confirmAlerts(
      ";Estas Seguro?",
      `El usuario id: ${id} se eliminará permanentemente`,
      function (response) {
        if (response) {
          dispatch(removeUser(id)).then((response) => {
            if (response.error) {
              alerts(`Ocurrió un error al eliminar el usuario id: ${id} `, "error");
            } else {
              alerts(`El usuario id: ${id} se eliminó correctamente`, "success");
            }
          });
        }
      }
    );
  };

  useEffect(() => {
    dispatch(fetchUsers(searchValues));
  }, [dispatch, searchValues]);

  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/users/create" linkTitle="Crear" title="Users" />
      <SearchInput
        handleSearch={handleSearch}
        title="Ingresa el nombre del Usuario que desea buscar"
      />
      <BackUsersList data={users} onDelete={onDelete} />
    </div>
  );
};

export default UsersListContainer;
