import axios from "axios";

export const axiosPublicInstace = axios.create({
  baseURL: "http://localhost:1337/api",
});
