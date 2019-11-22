import axios from "axios";

const Instance = {
  axiosInstance(contentType = "application/json") {
    const instance = axios.create({
      baseURL: process.env.REACT_APP_SLACKSYNC_URI,
      timeout: 15000
    });
    return instance;
  }
};

export default Instance;
