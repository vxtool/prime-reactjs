import promise from 'es6-promise';
import { AXIOS_INSTANCE } from '../config';
import { getQueryParamsUrl } from '../helpers';

promise.polyfill();

const actions = {
  get(actionId, { offset, limit, name }) {
    const params = {
      offset,
      limit,
      name,
    };

    const query = getQueryParamsUrl(params);

    return AXIOS_INSTANCE.get(`/actions/${actionId}/advertisings${query}`);
  },

  getId(actionId, id) {
    return AXIOS_INSTANCE.get(`/actions/${actionId}/advertisings/${id}`);
  },

  create(actionId, data) {
    data = data.toJS();

    return AXIOS_INSTANCE.post(`/actions/${actionId}/advertisings`, data);
  },

  update(actionId, id, data) {
    return AXIOS_INSTANCE.put(`/actions/${actionId}/advertisings/${id}`, data);
  },

  changeStatus(actionId, id, status) {
    const data = { status };
    return AXIOS_INSTANCE.patch(`/actions/${actionId}/advertisings/${id}`, data);
  },

  destinationTypes() {
    return AXIOS_INSTANCE.get(`/destination-types`);
  },
};

export default actions;
