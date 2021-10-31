import axios from "axios";

const { API_URL } = process.env;

const request = axios.create({
  baseURL: API_URL || "https://stock-exchange-arun.herokuapp.com/api",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default request;
