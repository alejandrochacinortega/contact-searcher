import React from 'react';
import PropTypes from 'prop-types';
import '../../../../App.css';

const SingleContact = ({ contact, goToDetailPage, getInTouchBy }) => {
  return (
    <li>
      <div className="contact">
        <div className="contact-top">
          <div
            className="contact-cover"
            style={{
              width: 128,
              height: 100,
              backgroundImage: `url(${contact.get('avatar')})`,
            }}
            onClick={() => goToDetailPage(contact)}
          />
          <div className="contact-get-in-touch">
            <select
              defaultValue="none"
              onChange={event => getInTouchBy(event.target.value, contact)}
            >
              <option
                value="none"
                disabled
              >{`Contact ${contact.get('name')} by...`}</option>
              <option value="phone">
                Phone
              </option>
              <option value="email">Email</option>
              <option value="sms">SMS</option>
            </select>
          </div>
        </div>
        <div className="contact-name">{contact.get('name')}</div>
        <div className="contact-phone">{contact.get('phone')}</div>
      </div>
    </li>
  );
};

SingleContact.propTypes = {
  contact: PropTypes.object.isRequired,
  goToDetailPage: PropTypes.func.isRequired,
  getInTouchBy: PropTypes.func.isRequired,
};

export default SingleContact;
