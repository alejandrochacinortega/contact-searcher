import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';

class ContactsScreen extends Component {
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

export default connect(mapStateToProps, null)(ContactsScreen);
