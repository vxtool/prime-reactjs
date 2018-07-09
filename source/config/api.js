import axios from 'axios';
import { getToken } from '../helpers';

const hosts = {
  'app.prime.com': 'http://api.prime.com',
  'app-staging.prime.com': 'http://api-staging.prime.com',
  localhost: 'http://localhost:3000',
};
const host = window.location.hostname;

const instance = axios.create({
  baseURL: hosts[host],
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  config => {
    config.headers.Authorization = `${getToken()}`;
    return config;
  },
  error => Promise.reject(error)
);

export const API_URL = hosts[host];
export const AXIOS_INSTANCE = instance;
