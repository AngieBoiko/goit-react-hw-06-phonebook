import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import s from "./Form.module.css";

class Form extends Component {
  state = { name: "", number: "" };
  handleInput = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      id: uuidv4(),
      number: this.state.number,
    });
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.formLabel}>
          Name
          <input
            className={s.formInput}
            value={name}
            onChange={this.handleInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.formLabel}>
          Number
          <input
            className={s.formInput}
            value={number}
            onChange={this.handleInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className={s.formBtn}>
          Add to contacts
        </button>
      </form>
    );
  }
}
export default Form;
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
