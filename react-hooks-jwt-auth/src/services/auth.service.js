import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      //console.log(response.data)
      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }      
      return response.data;
    });
};


// thieu API
const logout = () => {
  return axios.post(API_URL + "logout", {
    //...data
  }, {
    headers: authHeader()
  })
  .then(() => localStorage.removeItem("user"));
};


const todo = (todo) => {
  return axios.post(API_URL + "todo", {
    title: todo,
  }, {
    headers: authHeader()
  })
  .then((response) => console.log(response.data));
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout,
  getCurrentUser,
  todo,
};