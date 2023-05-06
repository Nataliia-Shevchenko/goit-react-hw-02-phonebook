import React from 'react';
import PropTypes from 'prop-types';

const ContactElement = ({ contact }) => {
  const { id, name, number } = contact;
  return (
    <li key={id}>
      {name}: {number}
      <button type="button">Delete</button>
    </li>
  );
};

export default ContactElement;

ContactElement.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
