import React from "react";

import MembersList from "../../Components/Members/MembersList";

const MEMBERS = [
  {
    id: 1,
    name: "Juan",
    photo: "https://via.placeholder.com/150/92c952",
  },
  {
    id: 2,
    name: "PepitoX",
    photo: "https://via.placeholder.com/150/771796",
  },
  {
    id: 3,
    name: "PepitoY",
    photo: "https://via.placeholder.com/150/d32776",
  },
  {
    id: 4,
    name: "PepitoZ",
    photo: "https://via.placeholder.com/150/f66b97",
  },
  {
    id: 5,
    name: "Pepito Omega X",
    photo: "https://via.placeholder.com/150/56a8c2",
  },
  {
    id: 6,
    name: "Pepito Omega Y",
    photo: "https://via.placeholder.com/150/fad390",
  },
];
const MembersContainer = () => {
  return (
    <div className="container">
      <h1 className="text-center">Members Container</h1>
      <MembersList content={MEMBERS} />
    </div>
  );
};

export default MembersContainer;
