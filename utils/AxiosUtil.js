import axios from "axios";

const Instance = {
  axiosInstance(contentType = "application/json") {
    const instance = axios.create({
      baseURL: process.env.SLACKSYNC_URI,
      timeout: 15000,
      headers: this.getHeader(contentType)
    });
    return instance;
  }
};

export default Instance;
