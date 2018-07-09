import { Map, List } from 'immutable';

export const ACCOUNTS_READ_REQUEST = 'ACCOUNTS_READ_REQUEST';
export const ACCOUNTS_READ_REQUEST_SUCCESS = 'ACCOUNTS_READ_REQUEST_SUCCESS';
export const ACCOUNTS_READ_REQUEST_FAILURE = 'ACCOUNTS_READ_REQUEST_FAILURE';

const INITIAL_STATE = Map({
  list: List(),
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACCOUNTS_READ_REQUEST_SUCCESS:
      return state.merge({
        list: action.payload.data,
      });
    case ACCOUNTS_READ_REQUEST:
    case ACCOUNTS_READ_REQUEST_FAILURE:
    default:
      return state;
  }
};
