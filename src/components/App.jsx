import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const contactItem = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };
    this.setState(prevState => ({
      contacts: [contactItem, ...prevState.contacts],
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        
        <h2>Contacts</h2>
       <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={visibleContacts} />
      </>
    );
  }
}

export default App;
