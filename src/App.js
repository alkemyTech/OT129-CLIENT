import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import CategoriesForm from "./Components/Categories/CategoriesForm";
import NewsForm from "./Components/News/NewsForm";
import SlidesForm from "./Components/Slides/SlidesForm";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import UserForm from "./Components/Users/UsersForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import MembersForm from "./Components/Members/MembersForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import Organization from "./Components/Organization/Organization";

import RegisterForm from "./Components/Auth/RegisterForm";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={} />           Esta ruta debe ser para el Home */}
        <Route exact path="/create-activity" component={ActivitiesForm} />
        <Route exact path="/create-category" component={CategoriesForm} />
        <Route exact path="/create-news" component={NewsForm} />
        <Route exact path="/backoffice/create-slide" component={SlidesForm} />
        <Route exact path="/backoffice/organization" component={Organization} />
        <Route exact path="/create-testimonials" component={TestimonialForm} />
        <Route exact path="/create-user" component={UserForm} />
        <Route exact path="/create-member" component={MembersForm} />
        <Route exact path="/create-project" component={ProjectsForm} />
        <Route exact path="/school-campaign" component={SchoolCampaign} />
        <Route exact path="/toys-campaign" component={ToysCampaign} />
        <Route exact path="/register" component={RegisterForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
