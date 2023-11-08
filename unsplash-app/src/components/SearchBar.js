import React, { Component } from 'react';
import './SearchBar.css'; // Импортируем CSS

class SearchBar extends Component {
  state = {
    query: 'world'
  };

  handleSearch = () => {
    this.props.onSearch(this.state.query);
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.onSearch(this.state.query);
    }
  };

  render() {
    return (
      <div className="search-bar"> {/* Добавляем класс search-bar */}
        <input
          type="text"
          value={this.state.query}
          onChange={(e) => this.setState({ query: e.target.value })}
          onKeyPress={this.handleKeyPress}
          className="search-input"
          placeholder="Search photos"
          aria-label="Search photos"
        />
        <div className="input-group-append">
          <button
            onClick={this.handleSearch}
            className="search-button"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
