import { publicAPI } from "../shared/http";

export const fetchUsers = async () => {
  const { data } = await publicAPI.get("");
  return data;
};

export const updateTweetById = async (obj) => {
  const { data } = await publicAPI.put(`/${obj.id}`, obj);
  return data;
};
