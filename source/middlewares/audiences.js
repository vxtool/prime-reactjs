import promise from 'es6-promise';
import { AXIOS_INSTANCE } from '../config';
import { getQueryParamsUrl } from '../helpers';

promise.polyfill();

const audiences = {
  get(options) {
    const params = options || {};
    const query = getQueryParamsUrl(params);

    return AXIOS_INSTANCE.get(`/audiences${query}`, {
      timeout: 8000,
    });
  },
};

export default audiences;
