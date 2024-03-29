import axios from "axios";

export const api = axios.create({
  baseURL: "https://team4-bash.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
