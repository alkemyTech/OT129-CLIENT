import { axiosInstance } from "./axiosConfig";

export const createNews = async ({ data }) => {
  return await axiosInstance.post("/news", data);
};
