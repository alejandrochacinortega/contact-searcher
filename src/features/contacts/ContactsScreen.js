import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { RingLoader } from 'halogen';
import '../../App.css';
import { fetchAllContacts } from '../../actions';
import { SingleContact } from './components/Contacts';
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

  getInTouchBy = (value, contact) => {
    alert(`Get in touch with ${contact.get('name')} by ${value}`);
  };

  goToDetailPage = contact => {
    alert(`Go to ${contact.get('name')}'s details page`);
  };

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
      <ol className="contacts-grid">
        {contacts
          .map(contact => (
            <SingleContact
              contact={contact}
              key={contact.get('id')}
              goToDetailPage={this.goToDetailPage}
              getInTouchBy={this.getInTouchBy}
            />
          ))
          .toArray()}
      </ol>
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
