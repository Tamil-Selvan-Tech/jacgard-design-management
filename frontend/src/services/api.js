import axios from "axios";

const API = axios.create({
  baseURL: "https://jacgard-design-management.onrender.com/api/designs",
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