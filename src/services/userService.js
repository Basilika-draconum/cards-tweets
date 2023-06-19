import { publicAPI } from "../shared/http";

export const fetchUsers = async (params) => {
  const { data } = await publicAPI.get("", params);
  return data;
};

export const updateTweetById = async (obj) => {
  const { data } = await publicAPI.put(`/${obj.id}`, obj);
  return data;
};
