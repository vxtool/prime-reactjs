import promise from 'es6-promise';
import { AXIOS_INSTANCE } from '../config';
import { getQueryParamsUrl } from '../helpers';

promise.polyfill();

const actions = {
  get({ offset, limit, name }) {
    const params = {
      offset,
      limit,
      name,
    };

    const query = getQueryParamsUrl(params);

    return AXIOS_INSTANCE.get(`/actions${query}`);
  },

  getId(id) {
    return AXIOS_INSTANCE.get(`/actions/${id}`);
  },

  create(data) {
    // ao criar uma ação o status será draft
    data = data.toJS();

    data.formattedStartDate = `${data.startDate} ${!data.startHour ? '00:00' : data.startHour}`;
    if (data.endDate) {
      data.formattedEndDate = `${data.endDate} ${!data.endHour ? '00:00' : data.endHour}`;
    } else {
      data.formattedEndDate = null;
    }

    delete data.startDate;
    delete data.startHour;
    delete data.endDate;
    delete data.endHour;

    return AXIOS_INSTANCE.post(`/actions`, data);
  },

  update(id, data) {
    data.formattedStartDate = `${data.startDate} ${!data.startHour ? '00:00' : data.startHour}`;

    if (data.endDate) {
      data.formattedEndDate = `${data.endDate} ${!data.endHour ? '00:00' : data.endHour}`;
    }

    delete data.startDate;
    delete data.startHour;
    delete data.endDate;
    delete data.endHour;

    return AXIOS_INSTANCE.put(`/actions/${id}`, data);
  },

  changeStatus(id, status) {
    const data = { status };
    return AXIOS_INSTANCE.patch(`/actions/${id}`, data);
  },
};

export default actions;
