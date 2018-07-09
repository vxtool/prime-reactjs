import { Map } from 'immutable';

// import users from '../pages/users/users-reducer';

// import userCreate from '../pages/user/user-create-reducer';
// import userRead from '../pages/user/user-read-reducer';

// const user = (state = Map(), action) => {
//   return state.merge({
//     create: userCreate(state.get('create'), action),
//     read: userRead(state.get('read'), action),
//   });
// };

const entities = (state = Map(), action) => {
  return state.merge({
    // users: users(state.get('users'), action),
    // user: user(state.get('user'), action),
  });
};

export default entities;
