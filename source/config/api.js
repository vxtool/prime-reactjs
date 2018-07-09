import axios from 'axios';
import { getToken } from '../helpers';

const hosts = {
  'app.b2wadvertising.com': 'http://api.b2wadvertising.com',
  'app-staging.b2wadvertising.com': 'http://api-staging.b2wadvertising.com',
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
