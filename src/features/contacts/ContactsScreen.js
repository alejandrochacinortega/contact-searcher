import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { RingLoader } from 'halogen';
import '../../App.css';
import { fetchAllContacts } from '../../actions';
import { ContactList } from './components/Contacts';
import SearchBar from './components/SearchBar';

class ContactsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.fetchAllContacts();
    });
  }

  /**
   * @description Function ready to send user to contact an user from his/her contacts list.
   * @constructor
   * @param contact ( Immutable Map )
   * @returns alert with a message
   */
  getInTouchBy = (value, contact) => {
    alert(`Get in touch with ${contact.get('name')} by ${value}`);
  };

  /**
   * @description Function ready to send user to a supposedly contact detail page.
   * @constructor
   * @param contact ( Immutable Map )
   * @returns alert with a message
   */
  goToDetailPage = contact => {
    alert(`Go to ${contact.get('name')}'s details page`);
  };

  /**
   * @description Render contacts from the search
   * @constructor
   * @param none
   * @returns JSX
   */
  renderContacts = () => {
    let contacts;
    const { term } = this.state;
    if (!term) {
      contacts = this.props.contacts;
    } else {
      contacts = this.props.contacts.filter(
        contact =>
          contact.get('name').toLowerCase().includes(term.toLowerCase()) ||
          contact.get('phone').includes(term),
      );
    }
    return (
      <ContactList
        contacts={contacts}
        goToDetailPage={this.goToDetailPage}
        getInTouchBy={this.getInTouchBy}
      />
    );
  };

  contactSearch = term => {
    this.setState({ term });
  };

  render() {
    const contactSearch = _.debounce(term => {
      this.contactSearch(term);
    }, 300);
    const { contacts } = this.props;
    if (contacts.size === 0) {
      return (
        <div className="center-text">
          <RingLoader color="#26a65b" size="96px" margin="4px" />;
        </div>
      );
    }
    return (
      <div className="search-contacts-results">
        <SearchBar onSearchTermChange={contactSearch} />
        {this.renderContacts()}
      </div>
    );
  }
}

function mapStateToProps({ contacts }) {
  return {
    contacts: contacts.get('allContacts'),
  };
}

ContactsScreen.propTypes = {
  fetchAllContacts: PropTypes.func.isRequired,
  contacts: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { fetchAllContacts })(ContactsScreen);
