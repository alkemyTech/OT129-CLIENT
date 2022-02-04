import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import CategoriesContainer from "./Containers/Categories/CategoriesContainer";
import NewsForm from "./Components/News/NewsForm";
import SlidesForm from "./Components/Slides/SlidesForm";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import BackOfficeUserPage from "./Pages/BackOfficeUserPage";
import UserForm from "./Components/Users/UsersForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import MembersForm from "./Components/Members/MembersForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import SlidesContainer from "./Components/Slides/SlidesContainer";
import FooterForm from "./Components/Footer/FooterForm";
import RegisterForm from "./Components/Auth/RegisterForm";
import EditOrganization from "./Containers/EditOrganization/EditOrganization";
import ActivitiesDetailsContainer from "./Containers/Activities/ActivitiesDetailsContainer/ActivitiesDetailsContainer";
import CategoriesListContainer from "./Containers/Categories/CategoriesListContainer";
import HomeForm from "./Components/Home/HomeForm";
import ActivitiesListContainer from "./Components/Activities/Backoffice/ActivitiesListContainer";
import NewsDetailsContainer from "./Components/News/Details/NewsDetailsContainer";
import MembersContainer from "./Containers/Members/MembersContainer";
import Donation from "./Components/Donations/Donation";
import ThankYou from "./Components/Donations/ThankYou";
import NewsList from "./Components/News/NewsList";
import NewsPage from "./Pages/NewsPage";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import Backoffice from "./Containers/Backoffice/Backoffice";
import ActivitiesPage from "./Pages/ActivitiesPage";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact component={HomePage} path="/" />
          <Route exact component={ActivitiesPage} path="/activities" />
          <Route exact component={ActivitiesForm} path="/create-activity" />
          <Route exact component={ActivitiesDetailsContainer} path="/activities/:id" />
          <Route exact component={Backoffice} path="/backoffice" />
          <Route exact component={NewsList} path="/backoffice/news" />
          <Route exact component={NewsPage} path="/novedades" />
          <Route exact component={CategoriesContainer} path="/create-category" />
          <Route exact component={NewsForm} path="/backoffice/create-news" />
          <Route exact component={NewsDetailsContainer} path="/novedades/:id" />
          <Route exact component={SlidesForm} path="/backoffice/slides/create" />
          <Route exact component={SlidesContainer} path="/backoffice/slides" />
          <Route exact component={EditOrganization} path="/backoffice/organization/edit" />
          <Route exact component={HomeForm} path="/backoffice/home" />
          <Route exact component={ActivitiesListContainer} path="/backoffice/activities" />
          <Route exact component={MembersContainer} path="/backoffice/members" />
          <Route exact component={MembersForm} path="/backoffice/members/create" />

          <Route exact component={TestimonialForm} path="/create-testimonials" />

          <Route exact component={BackOfficeUserPage} path="/backoffice/users" />
          <Route exact component={UserForm} path="/backoffice/users/create" />

          <Route exact component={ProjectsForm} path="/create-project" />
          <Route exact component={SchoolCampaign} path="/school-campaign" />
          <Route exact component={ToysCampaign} path="/toys-campaign" />
          <Route exact component={RegisterForm} path="/register" />
          <Route exact component={ContactPage} path="/contact" />

          <Route exact component={FooterForm} path="/footer-form" />
          <Route exact component={CategoriesListContainer} path="/backoffice/categories" />
          <Route exact component={Donation} path="/donar" />
          <Route exact component={ThankYou} path="/gracias" />
          <Route exact component={AboutPage} path="/nosotros" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
