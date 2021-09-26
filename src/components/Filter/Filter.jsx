import React from 'react';
import { connect } from 'react-redux';
import { filterContact } from '../../redux/actions';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <div className={s.filterWrapper}>
      <label className={s.filterLabel}>
        Find contacts by name
        <input
          className={s.filterInput}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </div>
  );
}
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(filterContact(e.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
