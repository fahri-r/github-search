import axios from "axios";

export const BACKEND = axios.create({
  baseURL: "https://api.github.com",
});