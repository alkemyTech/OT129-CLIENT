import Backoffice from "../../Containers/Backoffice/Backoffice";
import HomeForm from "../Home/HomeForm";
import ActivitiesListContainer from "../../Containers/Activities/ActivitiesListContainer";
import ActivitiesFormContainer from "../../Containers/Activities/ActivitiesFormContainer/ActivitiesFormContainer";
import NewsList from "../News/NewsList";
import NewsContainer from "../../Containers/News/NewsContainer";
import CategoriesListContainer from "../../Containers/Categories/CategoriesListContainer";
import CategoriesFormContainer from "../../Containers/Categories/CategoriesFormContainer";
import SlidesContainer from "../../Containers/Slides/SlidesContainer";
import SlidesBackofficeContainer from "../../Containers/Slides/SlidesBackofficeContainer";
import UsersListContainer from "../../Containers/Users/UsersListContainer";
import UsersFormContainer from "../../Containers/Users/UsersFormContainer";
import MembersListContainer from "../../Containers/Members/MembersListContainer";
import MembersFormContainer from "../../Containers/Members/MembersFormContainer";
import OrganizationContainer from "../../Containers/Organization/OrganizationContainer";
import EditOrganization from "../../Containers/EditOrganization/EditOrganization";
import TestimonialFormContainer from "../../Containers/Testimonials/TestimonialsFormContainer";
import TestimonialListContainer from "../../Containers/Testimonials/TestimonialsListContainer";
import Newsletter from "../../Pages/Newsletter";

const routes = [
  {
    path: "/newsletter",
    component: Newsletter,
    exact: true,
  },
  {
    path: "/backoffice",
    component: Backoffice,
    exact: true,
  },
  {
    path: "/backoffice/home",
    component: HomeForm,
    exact: true,
  },
  {
    path: "/backoffice/activities",
    component: ActivitiesListContainer,
    exact: true,
  },
  {
    path: "/backoffice/activities/create",
    component: ActivitiesFormContainer,
    exact: true,
  },
  {
    path: "/backoffice/activities/edit/:id",
    component: ActivitiesFormContainer,
    exact: true,
  },
  {
    path: "/backoffice/news",
    component: NewsList,
    exact: true,
  },
  {
    path: "/backoffice/news/create",
    component: NewsContainer,
    exact: true,
  },
  {
    path: "/backoffice/news/edit/:id",
    component: NewsContainer,
    exact: true,
  },
  {
    path: "/backoffice/categories",
    component: CategoriesListContainer,
    exact: true,
  },
  {
    path: "/backoffice/categories/create",
    component: CategoriesFormContainer,
    exact: true,
  },
  {
    path: "/backoffice/categories/edit/:id",
    component: CategoriesFormContainer,
    exact: true,
  },
  {
    path: "/backoffice/slides",
    component: SlidesContainer,
    exact: true,
  },
  {
    path: "/backoffice/slides/create",
    component: SlidesBackofficeContainer,
    exact: true,
  },
  {
    path: "/backoffice/slides/edit/:id",
    component: SlidesBackofficeContainer,
    exact: true,
  },
  {
    path: "/backoffice/users",
    component: UsersListContainer,
    exact: true,
  },
  {
    path: "/backoffice/users/create",
    component: UsersFormContainer,
    exact: true,
  },
  {
    path: "/backoffice/users/edit/:id",
    component: UsersFormContainer,
    exact: true,
  },
  {
    path: "/backoffice/members",
    component: MembersListContainer,
    exact: true,
  },
  {
    path: "/backoffice/members/create",
    component: MembersFormContainer,
    exact: true,
  },
  {
    path: "/backoffice/members/edit/:id",
    component: MembersFormContainer,
    exact: true,
  },
  {
    path: "/backoffice/organization",
    component: OrganizationContainer,
    exact: true,
  },
  {
    path: "/backoffice/organization/edit/:id",
    component: EditOrganization,
    exact: true,
  },
  {
    path: "/backoffice/testimonials",
    component: TestimonialListContainer,
    exact: true,
  },
  {
    path: "/backoffice/testimonials/create",
    component: TestimonialFormContainer,
    exact: true,
  },
  {
    path: "/backoffice/testimonials/edit/:id",
    component: TestimonialFormContainer,
    exact: true,
  },
];

export default routes;
