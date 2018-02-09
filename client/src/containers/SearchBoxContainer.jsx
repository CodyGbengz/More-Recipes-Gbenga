import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRecipe, clearSearchResult } from '../actions/searchAction';
import SearchBox from '../components/SearchBox';

class SearchBoxContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.resetResultsList = this.resetResultsList.bind(this);
  }

  handleSearch(event) {
    const searchTerm = event.target.value;
    if (searchTerm.length > 1) {
      this.props.searchRecipe(searchTerm);
    }
    this.props.clearSearchResult();
  }

  resetResultsList(event) {
    event.target.value = '';
    setTimeout(() => (this.props.clearSearchResult()), 1000);
  }

  render() {
    const { searchResult } = this.props;
    return (
      <SearchBox
      searchResults={ searchResult }
      handleSearch={this.handleSearch}
      resetResultsList={this.resetResultsList}
      />
    );
  }
}

const mapStateToProps = state => ({
  searchResult: state.searchResult
});

export default connect(mapStateToProps, { searchRecipe, clearSearchResult })(SearchBoxContainer);
