// services/axiosConfig.js
import axios from "axios";

const API_BASE_URL = "https://backend.ifpmc.org/api"; // Replace with your API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
