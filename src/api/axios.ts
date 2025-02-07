import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://limiance-token-sale.onrender.com/api/v1",
  // // headers: {
  // //   "Content-Type": "application/json",
  // //   "Accept": "application/json",
  // }
  // withCredentials: true, // Include credentials if needed
});
