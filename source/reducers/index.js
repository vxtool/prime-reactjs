import entities from './entities';
import location from './location';

export default (state = {}, action) => {
  return Object.assign({}, state, {
    entities: entities(state.entities, action),
    location: location(state.location, action),
  });
};
