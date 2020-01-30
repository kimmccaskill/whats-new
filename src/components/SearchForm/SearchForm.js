import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {searchInput: ''}
  }

  updateChange = (event) => {
    this.setState({searchInput: event.target.value})
  }

  submitSearch = () => {
    this.props.filterArticles(this.state.searchInput)
  }

  render() {
    return (
      <form className="nav-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search for article here"
          value={this.state.searchInput}
          onChange={this.updateChange}
        />
        <button
          type="button"
          className="search-btn"
          onClick={this.submitSearch}
        >Search</button>
      </form>
    )
  }
}

export default SearchForm;
