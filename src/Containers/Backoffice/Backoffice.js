import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../../features/auth/authSlice";

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
    link: "/backoffice/testimonials",
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
  const dispatch = useDispatch();

  return (
    <div className="container-fluid bg-container">
      <div className="container d-flex justify-content-end mb-4">
        <Link
          className="stroke-btn text-decoration-none icono-logout"
          data-bs-placement="bottom"
          data-bs-toggle="tooltip"
          title="Cerrar Sesión"
          to="/"
          onClick={() => {
            dispatch(logout());
          }}
        >
          <i className="fas fa-sign-out-alt" />
        </Link>
      </div>
      <BackCards data={BACK_CARDS} />
    </div>
  );
}

export default Backoffice;
