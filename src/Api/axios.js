import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-38286/us-central1/api",
  // deployed version of firebase function
  // baseURL: "http://127.0.0.1:5001/clone-36597/us-central1/api",

  // deployed version of amazon server on render.com
  baseURL: "https://amazone-api-deploy-gcbi.onrender.com/",
});

export { axiosInstance };
