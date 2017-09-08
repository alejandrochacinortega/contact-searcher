import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onChangeInput = term => {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  };

  render() {
    const { term } = this.state;
    return (
      <div className="search-contacts-bar">
        <div className="search-contacts-input-wrapper">
          <form>
            <input
              type="text"
              value={term}
              placeholder="Search by name or phone"
              onChange={event => this.onChangeInput(event.target.value)}
            />
          </form>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearchTermChange: PropTypes.func.isRequired,
};

export default SearchBar;
