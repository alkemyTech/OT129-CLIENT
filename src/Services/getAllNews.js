import { axiosInstance } from "./axiosConfig";

export const getAllNews = async () => {
  return await axiosInstance.get("/news");
};
