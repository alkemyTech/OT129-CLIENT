import { get } from "./publicApiService";
import { post } from "./privateApiService";

const ENDPOINT_PUBLIC = "slides";
const ENDPOINT_PRIVATE = "organization";

export const getSlides = () => {
  return get(ENDPOINT_PUBLIC);
};

export const postOrganization = (data) => {
  return post(ENDPOINT_PRIVATE, data);
};
