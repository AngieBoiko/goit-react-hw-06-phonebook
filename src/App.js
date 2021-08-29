import React, { Component } from 'react';

import Contacts from './components/Contacts';
import Form from './components/Form';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('Contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('Contacts', JSON.stringify(this.state.contacts));
    }
  }
  handleInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  forSubmitHandler = data => {
    const nameArray = this.state.contacts.map(item => {
      return item.name;
    });
    if (nameArray.includes(data.name)) {
      window.alert(`${data.name} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }));
    }
  };

  getContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    );
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };
  render() {
    const visibleContacts = this.getContacts();
    const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.forSubmitHandler}></Form>
        <h2>Contacts</h2>
        <Filter onChange={this.handleInput} value={filter}></Filter>
        <Contacts
          contactsItem={visibleContacts}
          onClick={this.deleteContact}
        ></Contacts>
      </div>
    );
  }
}

export default App;
