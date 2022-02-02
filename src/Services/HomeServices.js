import { get } from "./publicApiService";

const ENDPOINT = "home";

export const getHome = () => {
    return get(ENDPOINT);
  };