import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleFormSubmit = e => {
    e.preventDefault();
    // this.setState(prevState => ({
    //   contacts: prevState.contacts.push({ name: e.target.value }),
    // }));
    this.reset();
  };

  reset = () => {
    this.setState({ name: '',
    number: '',});
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <h1>Phonebook</h1>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {/* {contacts.map(contact => (
            <li>{contact.name}</li>
          ))} */}
        </ul>
      </>
    );
  }
}

export default App;
