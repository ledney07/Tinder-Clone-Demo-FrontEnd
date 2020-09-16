import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-demo.herokuapp.com",
});

export default instance;
