import { Map, List } from 'immutable';

export const USER_GROUPS_READ_REQUEST = 'USER_GROUPS_READ_REQUEST';
export const USER_GROUPS_READ_REQUEST_SUCCESS = 'USER_GROUPS_READ_REQUEST_SUCCESS';
export const USER_GROUPS_READ_REQUEST_FAILURE = 'USER_GROUPS_READ_REQUEST_FAILURE';

const INITIAL_STATE = Map({
  list: List(),
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_GROUPS_READ_REQUEST_SUCCESS:
      return state.merge({
        list: action.payload.data,
      });
    case USER_GROUPS_READ_REQUEST:
    case USER_GROUPS_READ_REQUEST_FAILURE:
    default:
      return state;
  }
};
