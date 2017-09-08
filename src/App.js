import React, { Component } from 'react';
import './App.css';
import ContactsScreen from './features/contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactsScreen />
      </div>
    );
  }
}

export default App;
