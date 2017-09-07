import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import { fetchAllContacts } from '../../actions';

class ContactsScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.fetchAllContacts();
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <div>
          <div>
            <h2>ContactsScreen</h2>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(' state ', state);
  return state;
}

ContactsScreen.propTypes = {
  fetchAllContacts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchAllContacts })(ContactsScreen);
