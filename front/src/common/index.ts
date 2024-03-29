import axios from "axios";

export const api = axios.create({
  baseURL: "https://team4-bash.onrender.com",
  // baseURL: "http://localhost:8008",
  headers: {
    "Content-Type": "application/json",
  },
});
