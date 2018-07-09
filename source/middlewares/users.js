import promise from 'es6-promise';
import { AXIOS_INSTANCE } from '../config';
import { getQueryParamsUrl } from '../helpers';

promise.polyfill();

const users = {
  get({ offset, limit, name }) {
    const params = {
      offset,
      limit,
      name,
    };

    const query = getQueryParamsUrl(params);

    return AXIOS_INSTANCE.get(`/users${query}`);
  },

  getId(id) {
    return AXIOS_INSTANCE.get(`/users/${id}`);
  },

  create(data) {
    data = data.toJS();

    return AXIOS_INSTANCE.post(`/users`, data);
  },

  update(id, data) {
    return AXIOS_INSTANCE.put(`/users/${id}`, data);
  },
};

export default users;
