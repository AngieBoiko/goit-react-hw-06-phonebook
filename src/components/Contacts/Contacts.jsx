import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Contacts.module.css";

class Contacts extends Component {
  handleClick = (id) => {
    this.props.onClick(id);
  };
  render() {
    const contacts = this.props.contactsItem;
    return (
      <ul className={s.contactsList}>
        {contacts.map((item) => (
          <li key={item.id} className={s.contactsItem}>
            <p className={s.contactsText}>
              {item.name}: {item.number}
            </p>
            <button
              className={s.contactsBtn}
              type="button"
              onClick={() => this.handleClick(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default Contacts;
Contacts.propTypes = {
  onClick: PropTypes.func.isRequired,
  contactsItem: PropTypes.array.isRequired,
};
