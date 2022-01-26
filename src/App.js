import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Counter from "./features/counter/Counter";
import logo from "./logo.svg";
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
          <Route exact component={CategoriesForm} path="/create-category" />
          <Route exact component={NewsForm} path="/backoffice/create-news" />
          <Route exact component={SlidesForm} path="/backoffice/create-slide" />
          <Route exact component={Organization} path="/backoffice/organization" />
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
      <div className="App">
        <header className="App-header">
          <img alt="logo" className="App-logo" src={logo} />
          <Counter />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              React Redux
            </a>
          </span>
        </header>
      </div>
    </>
  );
}

export default App;
