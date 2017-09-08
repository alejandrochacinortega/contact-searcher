import React from 'react';
import PropTypes from 'prop-types';
import SingleContact from './SingleContact';

const ContactsList = ({ contacts, goToDetailPage, getInTouchBy }) => {
  return (
    <ol className="contacts-grid">
      {contacts
        .map(contact => (
          <SingleContact
            contact={contact}
            key={contact.get('id')}
            goToDetailPage={goToDetailPage}
            getInTouchBy={getInTouchBy}
          />
        ))
        .toArray()}
    </ol>
  );
};

ContactsList.propTypes = {
  contact: PropTypes.object.isRequired,
  goToDetailPage: PropTypes.func.isRequired,
  getInTouchBy: PropTypes.func.isRequired,
};

export default ContactsList;
