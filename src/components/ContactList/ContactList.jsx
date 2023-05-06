import React from 'react';
import PropTypes from 'prop-types';
import ContactElement from 'components/ContactElement';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactElement contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
