import { get } from "./publicApiService";

const ENDPOINT = "/categories";

export const getCategories = () => {
  return get(SUB_URL);
};
