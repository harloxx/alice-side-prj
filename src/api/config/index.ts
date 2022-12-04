import axios, { AxiosError, AxiosInstance } from 'axios';

const http: AxiosInstance = axios.create({
  baseURL: 'https://api-rest.elice.io/org/academy/course/list/',
  headers: {
    withCredentials: true,
    'Content-Type': 'application/json',
  },
});
export { http };
