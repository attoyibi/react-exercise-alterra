// Utilitas untuk melakukan request API dengan axios
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/", // Ganti dengan URL API Anda
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
