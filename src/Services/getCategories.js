import { axiosInstance } from "./axiosConfig";

export const getCategories = async () => {
  const getData = await axiosInstance.get("/categories");
  return getData.data.data;
};
