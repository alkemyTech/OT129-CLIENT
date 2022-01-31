import { get } from "./publicApiService";

const ENDPOINT = "/slides";

export const getSlides = () => {
  return get(ENDPOINT);
};
