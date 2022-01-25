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
import FooterForm from "./Components/Footer/FooterForm";
import Organization from "./Components/Organization/Organization";
import RegisterForm from "./Components/Auth/RegisterForm";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" exact component={} />           Esta ruta debe ser para el Home */}
          <Route exact component={ActivitiesForm} path="/create-activity" />
          <Route exact component={CategoriesForm} path="/create-category" />
          <Route exact component={NewsForm} path="/create-news" />
          <Route exact component={SlidesForm} path="/backoffice/create-slide" />
          <Route
            exact
            component={Organization}
            path="/backoffice/organization"
          />
          <Route
            exact
            component={TestimonialForm}
            path="/create-testimonials"
          />
          <Route exact component={UserForm} path="/create-user" />
          <Route exact component={MembersForm} path="/create-member" />
          <Route exact component={ProjectsForm} path="/create-project" />
          <Route exact component={SchoolCampaign} path="/school-campaign" />
          <Route exact component={ToysCampaign} path="/toys-campaign" />
          <Route exact component={RegisterForm} path="/register" />
        </Switch>
      </BrowserRouter>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
        <FooterForm />
      </div>
    </>
  );
}

export default App;
