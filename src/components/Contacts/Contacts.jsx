import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';

function Contacts({ contactsItem, onClick }) {
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
              onClick={() => onClick(item.id)}
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

const getVisibleContacts = (items, filter) => {
  return items.filter(({ name }) => name.toLowerCase().includes(filter));
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  return {
    contactsItem: getVisibleContacts(items, filter),
  };
};
const mapDispatchToProps = dispatch => ({
  onClick: id => {
    dispatch(deleteContact(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

Contacts.propTypes = {
  onClick: PropTypes.func.isRequired,
  contactsItem: PropTypes.array.isRequired,
};
