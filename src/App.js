import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsScreen from './features/contacts';
import SearchBar from './features/contacts/components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Contact Searcher</h2>
        </div>
        <SearchBar />
        <ContactsScreen />
      </div>
    );
  }
}

export default App;
