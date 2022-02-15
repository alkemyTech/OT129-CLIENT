import Backoffice from "../../Containers/Backoffice/Backoffice";
import HomeForm from "../Home/HomeForm";
import ActivitiesListContainer from "../../Containers/Activities/ActivitiesListContainer";
import ActivitiesFormContainer from "../../Containers/Activities/ActivitiesFormContainer/ActivitiesFormContainer";
import NewsList from "../News/NewsList";
import NewsContainer from "../../Containers/News/NewsContainer";
import CategoriesListContainer from "../../Containers/Categories/CategoriesListContainer";
import CategoriesFormContainer from "../../Containers/Categories/CategoriesFormContainer";
import SlidesContainer from "../Slides/SlidesContainer";
import SlidesForm from "../Slides/SlidesForm";
import UsersListContainer from "../../Containers/Users/UsersListContainer";
import UsersFormContainer from "../../Containers/Users/UsersFormContainer";
import MembersListContainer from "../../Containers/Members/MembersListContainer";
import MembersFormContainer from "../../Containers/Members/MembersFormContainer";
import OrganizationContainer from "../../Containers/Organization/OrganizationContainer";
import EditOrganization from "../../Containers/EditOrganization/EditOrganization";

const routes = [
  {
    path: "backoffice",
    component: Backoffice,
    exact: true,
  },
  {
    path: "backoffice/home",
    component: HomeForm,
    exact: true,
  },
  {
    path: "backoffice/activities",
    component: ActivitiesListContainer,
    exact: true,
  },
  {
    path: "backoffice/activities/create",
    component: ActivitiesFormContainer,
    exact: true,
  },
  {
    path: "backoffice/activities/:id",
    component: ActivitiesFormContainer,
    exact: true,
  },
  {
    path: "backoffice/news",
    component: NewsList,
    exact: true,
  },
  {
    path: "backoffice/news/create",
    component: NewsContainer,
    exact: true,
  },
  {
    path: "backoffice/news/:id",
    component: NewsContainer,
    exact: true,
  },
  {
    path: "backoffice/categories",
    component: CategoriesListContainer,
    exact: true,
  },
  {
    path: "backoffice/categories/create",
    component: CategoriesFormContainer,
    exact: true,
  },
  {
    path: "backoffice/categories/:id",
    component: CategoriesFormContainer,
    exact: true,
  },
  {
    path: "backoffice/slides",
    component: SlidesContainer,
    exact: true,
  },
  {
    path: "backoffice/slides/create",
    component: SlidesForm,
    exact: true,
  },
  {
    path: "backoffice/users",
    component: UsersListContainer,
    exact: true,
  },
  {
    path: "backoffice/users/create",
    component: UsersFormContainer,
    exact: true,
  },
  {
    path: "backoffice/users/create/:id",
    component: UsersFormContainer,
    exact: true,
  },
  {
    path: "backoffice/members",
    component: MembersListContainer,
    exact: true,
  },
  {
    path: "backoffice/members/create",
    component: MembersFormContainer,
    exact: true,
  },
  {
    path: "backoffice/members/:id",
    component: MembersFormContainer,
    exact: true,
  },
  {
    path: "backoffice/organization",
    component: OrganizationContainer,
    exact: true,
  },
  {
    path: "backoffice/organization/edit",
    component: EditOrganization,
    exact: true,
  },
];

export default routes;
