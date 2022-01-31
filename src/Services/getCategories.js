import { instance } from "./axiosConfig";

export const getCategories = async () => {
  return await instance.get("/categories");
};
