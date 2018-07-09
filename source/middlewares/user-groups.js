import promise from 'es6-promise';
import { AXIOS_INSTANCE } from '../config';

promise.polyfill();

const userGroups = {
  get() {
    return AXIOS_INSTANCE.get(`/user-groups`);
  },
};

export default userGroups;
