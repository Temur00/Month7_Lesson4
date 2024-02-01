import axios from "axios";

const request = axios.create({
  baseURL: "https://65bb677f52189914b5bc02b7.mockapi.io/teachers",
  timeout: 10000,
});

export default request;
