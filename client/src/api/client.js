import axios from "axios";

const baseURL =
  typeof import.meta.env.VITE_API_URL === "string" &&
  import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL
    : "";

const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

export const getProducts = () =>
  api.get("/api/products").then((res) => res.data);
