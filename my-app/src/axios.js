import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/my-app-591f3/us-central1/api", // the api url cloud function
});

export default instance;
