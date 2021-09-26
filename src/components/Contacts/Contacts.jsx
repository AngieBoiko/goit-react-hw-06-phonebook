import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import s from './Contacts.module.css';

export default function Contacts() {
  const getVisibleContacts = (items, filter) => {
    return items.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  const contactsItem = useSelector(state => {
    const { items, filter } = state.contacts;
    return getVisibleContacts(items, filter);
  });
  const dispatch = useDispatch();

  if (contactsItem) {
    return (
      <ul className={s.contactsList}>
        {contactsItem.map(item => (
          <li key={item.id} className={s.contactsItem}>
            <p className={s.contactsText}>
              {item.name}: {item.number}
            </p>
            <button
              className={s.contactsBtn}
              type="button"
              onClick={() => dispatch(deleteContact(item.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
  return;
}
