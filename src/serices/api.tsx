import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "https://60caf88a21337e0017e43699.mockapi.io/tabs",
  timeout: 2000,
});
