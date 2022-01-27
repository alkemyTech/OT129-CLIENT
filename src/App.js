import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import CategoriesContainer from "./Containers/Categories/CategoriesContainer";
import NewsForm from "./Components/News/NewsForm";
import SlidesForm from "./Components/Slides/SlidesForm";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import UserForm from "./Components/Users/UsersForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import MembersForm from "./Components/Members/MembersForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import OrganizationContainer from "./Containers/Organization/OrganizationContainer";
import RegisterForm from "./Components/Auth/RegisterForm";
import EditOrganizationContainer from "./Containers/EditOrganization/EditOrganizationContainer";
import ActivitiesDetailsContainer from "./Components/Activities/Detail/ActivitiesDetailsContainer";
import HomeForm from "./Components/Home/HomeForm";
import ContactForm from "./Components/Contact/ContactForm";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" exact component={} />           Esta ruta debe ser para el Home */}
          <Route exact component={ActivitiesForm} path="/create-activity" />
          <Route exact component={ActivitiesDetailsContainer} path="/activities/:id" />
          <Route exact component={CategoriesContainer} path="/create-category" />
          <Route exact component={NewsForm} path="/backoffice/create-news" />
          <Route exact component={SlidesForm} path="/backoffice/create-slide" />
          <Route exact component={OrganizationContainer} path="/backoffice/organization" />
          <Route exact component={EditOrganizationContainer} path="/backoffice/organization/edit" />
          <Route exact component={OrganizationContainer} path="/backoffice/organization" />
          <Route exact component={HomeForm} path="/backoffice/home" />
          <Route exact component={TestimonialForm} path="/create-testimonials" />
          <Route exact component={UserForm} path="/create-user" />
          <Route exact component={MembersForm} path="/create-member" />
          <Route exact component={ProjectsForm} path="/create-project" />
          <Route exact component={SchoolCampaign} path="/school-campaign" />
          <Route exact component={ToysCampaign} path="/toys-campaign" />
          <Route exact component={RegisterForm} path="/register" />
          <Route exact component={ContactForm} path="/contact" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
