import axios from "axios";

const request = axios.create({
  timeout: 10000,
});

export const teachersRequest = axios.create({
  baseURL: "https://65bb677f52189914b5bc02b7.mockapi.io/teachers",
  timeout: 10000,
});

export const studentsRequest = axios.create({
  baseURL: "https://65bb677f52189914b5bc02b7.mockapi.io/students",
  timeout: 10000,
});

export default request;
