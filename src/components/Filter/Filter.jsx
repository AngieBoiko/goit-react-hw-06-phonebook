import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

export default function Filter({ value, onChange }) {
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
