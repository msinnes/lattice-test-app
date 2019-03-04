import React, { Component } from 'react';
import { connect } from 'react-redux';
import querystring from 'query-string';

import { getMostPopular } from '../../../redux/ducks';

import MovieList from './MovieList';
import Pagination from './Pagination';

class MostPopular extends Component {
  componentDidMount() {
    const query = querystring.parse(this.props.location.search);
    this.props.getMostPopular(query);
  }

  render() {
    console.log(this.props.mostPopular)
    if (this.props.mostPopular.loading || !this.props.mostPopular.loaded) {
      return 'Loading';
    }

    return (
      <div className="container">
        <Pagination
          currentPage={this.props.mostPopular.data.page}
          totalPages={this.props.mostPopular.data.total_pages}
        />
        <MovieList
          movies={this.props.mostPopular.data.results}
        />
        <Pagination
          currentPage={this.props.mostPopular.data.page}
          totalPages={this.props.mostPopular.data.total_pages}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mostPopular: state.mostPopular.toJS(),
});

const mapDispatchToProps = dispatch => ({
  getMostPopular: query => dispatch(getMostPopular(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MostPopular);
