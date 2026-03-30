import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, "") || window.location.origin;

const API = axios.create({
  baseURL: `${API_BASE_URL}/api/designs`,
});

export const addDesign = (data) =>
  API.post("/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const getDesigns = () => API.get("/");

export const deleteDesign = (id) => API.delete(`/${id}`);

export const updateStock = (id, stock) =>
  API.put(`/${id}`, { stock });

export const getImageUrl = (imageName) =>
  imageName ? `${API_BASE_URL}/uploads/${imageName}` : "";
