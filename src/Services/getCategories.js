import { axiosInstance } from "./axiosConfig";

export const getCategories = async () => {
  return await axiosInstance.get("/categories");
};
