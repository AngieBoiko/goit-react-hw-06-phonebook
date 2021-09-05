import React, { useState } from 'react';
import useLocalStorage from './components/Hooks/useLocalStorage';
import Contacts from './components/Contacts';
import Form from './components/Form';
import Filter from './components/Filter';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('Contacts', []);
  const [filter, setFilter] = useState('');

  const handleInput = event => {
    const { name, value } = event.currentTarget;
    if (name === 'filter') {
      setFilter(value);
    }
  };
  const forSubmitHandler = data => {
    const nameArray = contacts.map(item => {
      return item.name;
    });
    if (nameArray.includes(data.name)) {
      window.alert(`${data.name} is already in contacts.`);
    } else {
      setContacts(state => [...state, data]);
    }
  };

  const getContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    );
  };
  const deleteContact = id => {
    setContacts(state => state.filter(item => item.id !== id));
  };

  const visibleContacts = getContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={forSubmitHandler}></Form>
      <h2>Contacts</h2>
      <Filter onChange={handleInput} value={filter}></Filter>
      <Contacts
        contactsItem={visibleContacts}
        onClick={deleteContact}
      ></Contacts>
    </div>
  );
}
