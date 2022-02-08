import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import Donation from "./Components/Donations/Donation";
import ThankYou from "./Components/Donations/ThankYou";
import AboutPage from "./Pages/AboutPage";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import ActivitiesPage from "./Pages/ActivitiesPage";
import ActivitiesDetailsContainer from "./Containers/Activities/ActivitiesDetailsContainer/ActivitiesDetailsContainer";
import NewsPage from "./Pages/NewsPage";
import NewsDetailsContainer from "./Components/News/Details/NewsDetailsContainer";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import HomeForm from "./Components/Home/HomeForm";
import ActivitiesList from "./Components/Activities/Backoffice/ActivitiesListContainer";
import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import NewsList from "./Components/News/NewsList";
import NewsForm from "./Components/News/NewsForm";
import CategoriesListContainer from "./Containers/Categories/CategoriesListContainer";
import CategoriesContainer from "./Containers/Categories/CategoriesContainer";
import SlidesContainer from "./Components/Slides/SlidesContainer";
import SlidesForm from "./Components/Slides/SlidesForm";
import MembersContainer from "./Containers/Members/MembersContainer";
import MembersForm from "./Components/Members/MembersForm";
// import BackOfficeUsersPage from "./Pages/BackOfficeUsersPage";
import UsersListContainer from "./Container/Users/UsersListContainer";
import UsersForm from "./Components/Users/UsersForm";
import OrganizationContainer from "./Containers/Organization/OrganizationContainer";
import EditOrganization from "./Containers/EditOrganization/EditOrganization";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact component={HomePage} path="/" />

          <Route exact component={ContactPage} path="/contacto" />
          <Route exact component={Donation} path="/donar" />
          <Route exact component={ThankYou} path="/gracias" />
          <Route exact component={AboutPage} path="/nosotros" />
          <Route exact component={SchoolCampaign} path="/school-campaign" />
          <Route exact component={ToysCampaign} path="/toys-campaign" />

          <Route exact component={ActivitiesPage} path="/actividades" />
          <Route exact component={ActivitiesDetailsContainer} path="/actividades/:id" />

          <Route exact component={NewsPage} path="/novedades" />
          <Route exact component={NewsDetailsContainer} path="/novedades/:id" />

          <Route exact component={TestimonialForm} path="/testimonials/create" />
          <Route exact component={ProjectsForm} path="/projects/create" />

          <Route exact component={HomeForm} path="/backoffice/home" />
          <Route exact component={ActivitiesList} path="/backoffice/activities" />
          <Route exact component={ActivitiesForm} path="/backoffice/activities/create" />
          <Route exact component={NewsList} path="/backoffice/news" />
          <Route exact component={NewsForm} path="/backoffice/news/create" />
          <Route exact component={CategoriesListContainer} path="/backoffice/categories" />
          <Route exact component={CategoriesContainer} path="/backoffice/categories/create" />
          <Route exact component={SlidesContainer} path="/backoffice/slides" />
          <Route exact component={SlidesForm} path="/backoffice/slides/create" />
          <Route exact component={MembersContainer} path="/backoffice/members" />
          <Route exact component={MembersForm} path="/backoffice/members/create" />
          {/* <Route exact component={BackOfficeUsersPage} path="/backoffice/users" /> */}
          <Route exact component={UsersListContainer} path="/backoffice/users" />
          <Route exact component={UsersForm} path="/backoffice/users/create" />
          <Route exact component={UsersForm} path="/backoffice/users/create/:id" />
          <Route exact component={OrganizationContainer} path="/backoffice/organization" />
          <Route exact component={EditOrganization} path="/backoffice/organization/edit" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
