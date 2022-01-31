import { axiosInstance } from "./axiosConfig";

export const getNews = async () => {
  return await axiosInstance.get("/news");
};
