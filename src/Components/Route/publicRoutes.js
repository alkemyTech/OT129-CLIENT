import { lazy } from "react";

const HomePage = lazy(() => import(/* webpackChunkName: "LazyHomePage"*/ "../../Pages/HomePage"));
const TestimonialForm = lazy(() =>
  import(/* webpackChunkName: "LazyTestimonialsPage"*/ "../Testimonials/TestimonialsForm")
);
const ProjectsForm = lazy(() =>
  import(/* webpackChunkName: "LazyProjectsPage"*/ "../Projects/ProjectsForm")
);
const ContactPage = lazy(() =>
  import(/* webpackChunkName: "LazyContactPage"*/ "../../Pages/ContactPage")
);
const Donation = lazy(() =>
  import(/* webpackChunkName: "LazyDonationPage"*/ "../Donations/Donation")
);
const ThankYou = lazy(() =>
  import(/* webpackChunkName: "LazyThanYouPage"*/ "../Donations/ThankYou")
);
const AboutPage = lazy(() =>
  import(/* webpackChunkName: "LazyAboutPage"*/ "../../Pages/AboutPage")
);

const ActivitiesPage = lazy(() =>
  import(/* webpackChunkName: "LazyActivitiesPagePage"*/ "../../Pages/ActivitiesPage")
);
const ActivitiesIdPage = lazy(() =>
  import(/* webpackChunkName: "LazyActivitiesIdPagePage"*/ "../../Pages/ActivitiesIdPage")
);
const NewsPage = lazy(() =>
  import(/* webpackChunkName: "LazyNewsPagePage"*/ "../../Pages/NewsPage")
);
const NewsIdPage = lazy(() =>
  import(/* webpackChunkName: "LazyNewsIdPagePage"*/ "../../Pages/NewsIdPage")
);
const RegisterPage = lazy(() =>
  import(/* webpackChunkName: "LazyRegisterPagePage"*/ "../../Pages/RegisterPage")
);
const LoginPage = lazy(() =>
  import(/* webpackChunkName: "LazyRegisterPagePage"*/ "../../Pages/LoginPage")
);

export const publicRoute = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/contacto",
    component: ContactPage,
    exact: true,
  },
  {
    path: "/donar",
    component: Donation,
    exact: true,
  },
  {
    path: "/gracias",
    component: ThankYou,
    exact: true,
  },
  {
    path: "/nosotros",
    component: AboutPage,
    exact: true,
  },
  {
    path: "/actividades",
    component: ActivitiesPage,
    exact: true,
  },
  {
    path: "/actividades/:id",
    component: ActivitiesIdPage,
    exact: true,
  },
  {
    path: "/novedades",
    component: NewsPage,
    exact: true,
  },
  {
    path: "/novedades/:id",
    component: NewsIdPage,
    exact: true,
  },
  {
    path: "/registro",
    component: RegisterPage,
    exact: true,
  },
  {
    path: "/testimonials/create",
    component: TestimonialForm,
    exact: true,
  },
  {
    path: "/projects/create",
    component: ProjectsForm,
    exact: true,
  },
  {
    path: "/login",
    component: LoginPage,
    exact: true,
  },
];
