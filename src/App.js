import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import LoginForm from "./Components/Auth/LoginForm";
import ActivitiesPage from "./Pages/ActivitiesPage";
import ActivitiesIdPage from "./Pages/ActivitiesIdPage";
import NewsPage from "./Pages/NewsPage";
import NewsIdPage from "./Pages/NewsIdPage";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Donation from "./Components/Donations/Donation";
import HomePage from "./Pages/HomePage";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ThankYou from "./Components/Donations/ThankYou";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import RegisterForm from "./Components/Auth/RegisterForm";
import Error404 from "./Pages/Error404Page";
import Route from "./Components/Route";
import PrivateRoute from "./Components/Route/PrivateRoute";
import ProtectedRoutes from "./Components/Route/ProtectedRoutes";
import { getToken, selectAuth } from "./features/auth/authSlice";
import { isLogin } from "./utils/isLogin";
import Backoffice from "./Containers/Backoffice/Backoffice";
import RegisterPage from "./Pages/RegisterPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/offcanvas";
import "./App.css";

function App() {
  const login = isLogin();

  return (
    <>
      <Router>
        <div className="container-app">
          <Switch>
            <Route exact component={HomePage} path="/" />
            <Route exact component={ContactPage} path="/contacto" />
            <Route exact component={Donation} path="/donar" />
            <Route exact component={ThankYou} path="/gracias" />
            <Route exact component={AboutPage} path="/nosotros" />
            <Route exact component={SchoolCampaign} path="/school-campaign" />
            <Route exact component={ToysCampaign} path="/toys-campaign" />
            <Route exact component={ActivitiesPage} path="/actividades" />
            <Route exact component={ActivitiesIdPage} path="/actividades/:id" />
            <Route exact component={NewsPage} path="/novedades" />
            <Route exact component={NewsIdPage} path="/novedades/:id" />
            <Route exact component={RegisterPage} path="/registro" />
            <Route exact component={TestimonialForm} path="/testimonials/create" />
            <Route exact component={ProjectsForm} path="/projects/create" />
            <Route exact component={LoginForm} path="/login" />
            <PrivateRoute path="/">
              <ProtectedRoutes />
            </PrivateRoute>
            <Route component={Error404} path="*" />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
