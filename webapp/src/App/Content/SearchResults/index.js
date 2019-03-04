import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSearch } from '../../../redux/ducks';

import MovieList from '../shared-components/MovieList';

class SearchResults extends Component {
  componentDidMount() {
    this.props.getSearch(this.props.location.search);
  }

  render() {
    if (this.props.searchResults.loading || !this.props.searchResults.loaded) {
      return 'Loading';
    }

    return (
      <div className="container">
        <h2>Most Popular</h2>
        <MovieList
          currentPage={this.props.searchResults.data.page}
          movies={this.props.searchResults.data.results}
          totalPages={this.props.searchResults.data.total_pages}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.search.toJS(),
});

const mapDispatchToProps = dispatch => ({
  getSearch: query => dispatch(getSearch(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
