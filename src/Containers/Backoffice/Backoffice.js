import React from "react";

<<<<<<< HEAD
import BackNavBar from "../../Components/Navigation/BackNavBar/BackNavBar";

=======
>>>>>>> development
import BackCards from "./BackCards";

import "./backoffice.css";

const BACK_CARDS = [
  {
    icon: "fas fa-newspaper fa-5x",
    title: "Novedades",
    link: "/backoffice/news",
  },
  {
    icon: "fas fa-chart-line fa-5x",
    title: "Actividades",
    link: "/backoffice/activities",
  },
  {
    icon: "fas fa-folder fa-5x",
    title: "Categorías",
    link: "/backoffice/categories",
  },
  {
    icon: "fas fa-comment-alt fa-5x",
    title: "Testimonios",
    link: "/backoffice/testimonies",
  },
  {
    icon: "fas fa-project-diagram fa-5x",
    title: "Organización",
    link: "/backoffice/organization",
  },
  {
    icon: "fas fa-file fa-5x",
    title: "Slides",
    link: "/backoffice/slides",
  },
  {
    icon: "fas fa-users fa-5x",
    title: "Usuarios",
    link: "/backoffice/users",
  },
  {
    icon: "fas fa-user-cog fa-5x",
    title: "Miembros",
    link: "/backoffice/members",
  },
];

function Backoffice() {
  return (
    <div className="container-fluid bg-container">
      <BackCards data={BACK_CARDS} />
    </div>
  );
}

export default Backoffice;
