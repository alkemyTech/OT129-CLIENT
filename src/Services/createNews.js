import { axiosInstance } from "./axiosConfig";

export const createNews = async (formData) => {
  return await axiosInstance.post("/news", formData);
};
