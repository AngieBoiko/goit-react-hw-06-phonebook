import React from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';

function Contacts({ contactsItem, onClick }) {
  const handleClick = id => {
    onClick(id);
  };

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
            onClick={() => handleClick(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Contacts;
Contacts.propTypes = {
  onClick: PropTypes.func.isRequired,
  contactsItem: PropTypes.array.isRequired,
};
