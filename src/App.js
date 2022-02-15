import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import ActivitiesListContainer from "./Containers/Activities/ActivitiesListContainer";
import ActivitiesFormContainer from "./Containers/Activities/ActivitiesFormContainer/ActivitiesFormContainer";
import EditOrganization from "./Containers/EditOrganization/EditOrganization";
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
import Backoffice from "./Containers/Backoffice/Backoffice";
import Route from "./Components/Route";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/offcanvas";
import "./App.css";
import Spinner from "./Components/Spinner/Spinner";
import { publicRoute } from "./Components/Route/publicRoutes";

function App() {
  return (
    <>
      <Router>
        <div className="container-app">
          <Switch>
            <Suspense fallback={<Spinner />}>
              {publicRoute.map(({ path, component, exact }) => {
                return (
                    <Route component={component} exact={exact} path={path} />
                );
              })}
            </Suspense>
          </Switch>
          <Switch>
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
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
