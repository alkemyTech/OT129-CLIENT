import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import ActivitiesListContainer from "./Containers/Activities/ActivitiesListContainer";
import ActivitiesFormContainer from "./Containers/Activities/ActivitiesFormContainer/ActivitiesFormContainer";
import ActivitiesPage from "./Pages/ActivitiesPage";
import ActivitiesIdPage from "./Pages/ActivitiesIdPage";
import NewsPage from "./Pages/NewsPage";
import NewsIdPage from "./Pages/NewsIdPage";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Donation from "./Components/Donations/Donation";
import EditOrganization from "./Containers/EditOrganization/EditOrganization";
import HomePage from "./Pages/HomePage";
import HomeForm from "./Components/Home/HomeForm";
import NewsList from "./Components/News/NewsList";
import CategoriesListContainer from "./Containers/Categories/CategoriesListContainer";
import CategoriesFormContainer from "./Containers/Categories/CategoriesFormContainer";
import MembersListContainer from "./Containers/Members/MembersListContainer";
import MembersFormContainer from "./Containers/Members/MembersFormContainer";
import NewsContainer from "./Containers/News/NewsContainer";
import OrganizationContainer from "./Containers/Organization/OrganizationContainer";
import SlidesContainer from "./Components/Slides/SlidesContainer";
import SlidesForm from "./Components/Slides/SlidesForm";
import UsersListContainer from "./Containers/Users/UsersListContainer";
import UsersFormContainer from "./Containers/Users/UsersFormContainer";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ThankYou from "./Components/Donations/ThankYou";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import Backoffice from "./Containers/Backoffice/Backoffice";
import Route from "./Components/Route";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/offcanvas";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <div className="container-app">
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

            <Route exact component={TestimonialForm} path="/testimonials/create" />
            <Route exact component={ProjectsForm} path="/projects/create" />
            <Route exact component={Backoffice} path="/backoffice" />
            <Route exact component={HomeForm} path="/backoffice/home" />
            <Route exact component={ActivitiesListContainer} path="/backoffice/activities" />
            <Route exact component={ActivitiesFormContainer} path="/backoffice/activities/create" />
            <Route exact component={ActivitiesFormContainer} path="/backoffice/activities/:id" />
            <Route exact component={NewsList} path="/backoffice/news" />
            <Route exact component={NewsContainer} path="/backoffice/news/create" />
            <Route exact component={NewsContainer} path="/backoffice/news/:id" />
            <Route exact component={CategoriesListContainer} path="/backoffice/categories" />
            <Route exact component={CategoriesFormContainer} path="/backoffice/categories/create" />
            <Route exact component={CategoriesFormContainer} path="/backoffice/categories/:id" />
            <Route exact component={SlidesContainer} path="/backoffice/slides" />
            <Route exact component={SlidesForm} path="/backoffice/slides/create" />
            <Route exact component={UsersListContainer} path="/backoffice/users" />
            <Route exact component={UsersFormContainer} path="/backoffice/users/create" />
            <Route exact component={UsersFormContainer} path="/backoffice/users/create/:id" />
            <Route exact component={MembersListContainer} path="/backoffice/members" />
            <Route exact component={MembersFormContainer} path="/backoffice/members/create" />
            <Route exact component={MembersFormContainer} path="/backoffice/members/:id" />
            <Route exact component={OrganizationContainer} path="/backoffice/organization" />
            <Route exact component={EditOrganization} path="/backoffice/organization/edit" />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
