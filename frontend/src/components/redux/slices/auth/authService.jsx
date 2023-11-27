import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/users/`;

// Register User
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);
  return response.data;
};

// Login User
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  return response.data;
};

// Logout User
const logout = async () => {
  const response = await axios.get(API_URL + "logout");
  return response.data;
};

// Login Status
const loginStatus = async () => {
  const response = await axios.get(API_URL + "loginStatus");
  return response.data;
};

// Get User
const getUser = async () => {
  const response = await axios.get(API_URL + "getUser");
  return response.data;
};

// Updatae User
const updateUser = async (userData) => {
  const response = await axios.patch(API_URL + "updateUser", userData);
  return response.data;
};

export const authService = {
  register,
  login,
  logout,
  loginStatus,
  getUser,
  updateUser,
};
