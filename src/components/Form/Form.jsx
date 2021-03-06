import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';
import s from './Form.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleInput = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      addContact({
        name,
        number,
      }),
    );
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.formLabel}>
        Name
        <input
          className={s.formInput}
          value={name}
          onChange={handleInput}
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
          onChange={handleInput}
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
