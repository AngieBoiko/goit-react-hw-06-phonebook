import types from './action-types';
import { v4 as uuidv4 } from 'uuid';

export const addContact = ({ name, id, number }) => {
  return {
    type: types.ADD,
    payload: {
      name,
      id: uuidv4(),
      number,
    },
  };
};
export const deleteContact = contactId => {
  return {
    type: types.DELETE,
    payload: contactId,
  };
};
export const filterContact = value => {
  return {
    type: types.FILTER,
    payload: value,
  };
};
