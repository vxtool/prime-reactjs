import promise from 'es6-promise';
import { AXIOS_INSTANCE } from '../config';

promise.polyfill();

const authentication = {
  post(data) {
    return AXIOS_INSTANCE.post(`/auth`, data);
  },

  verifyToken(token) {
    const data = { token };

    return AXIOS_INSTANCE.post(`/auth/token-validation`, data);
  },

  logout() {
    return AXIOS_INSTANCE.get(`/auth`);
  },
};

export default authentication;
