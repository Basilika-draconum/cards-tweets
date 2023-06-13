import publicAPI from "../shared/http";

export const fetchUsers = async () => {
  const { data } = await publicAPI.get("");
  return data;
};
export const fetchUser = async (id) => {
  const { data } = await publicAPI.get(id);
  return data;
};
