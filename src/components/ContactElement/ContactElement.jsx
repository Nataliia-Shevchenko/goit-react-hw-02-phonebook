import React from 'react';
import PropTypes from 'prop-types';

const ContactElement = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <li>
      {name}: {number}
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
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
  onDelete: PropTypes.func.isRequired,
};
