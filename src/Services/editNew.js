import { axiosInstance } from "./axiosConfig";

export const editNew = async ({ data }, id) => {
  return await axiosInstance.patch(`/news/${id}`, data);
};
