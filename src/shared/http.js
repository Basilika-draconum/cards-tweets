import axios from "axios";

export const publicAPI = axios.create({
  baseURL: "https://648747fbbeba629727906290.mockapi.io/users",
  params: {
    page: 1,
    per_page: 3,
  },
});
