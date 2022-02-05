import { get } from "./publicApiService";
import { post } from "./privateApiService";

const ENDPOINT_SLIDES = process.env.REACT_APP_API_SLIDES_ENDPOINT;
const ENDPOINT_ORGANIZATION = process.env.REACT_APP_API_ORGANIZATION_ENDPOINT;

export const getSlides = () => {
  return get(ENDPOINT_SLIDES);
};

export const postOrganization = (data) => {
  return post(ENDPOINT_ORGANIZATION, data);
};
