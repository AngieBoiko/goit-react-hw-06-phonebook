import { combineReducers } from 'redux';
import types from './action-types';

const contactsInitialState = {
  items: [],
  filter: '',
};
const items = (state = contactsInitialState.items, { type, payload }) => {
  switch (type) {
    case types.ADD:
      const nameArray = state.map(item => {
        return item.name;
      });
      if (nameArray.includes(payload.name)) {
        window.alert(`${payload.name} is already in contacts.`);
        return state;
      } else {
        return [...state, payload];
      }

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = contactsInitialState.filter, { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload.toLowerCase();
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
