import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMostPopular } from '../../../redux/ducks';

import MovieList from '../shared-components/MovieList';

class MostPopular extends Component {
  componentDidMount() {
    this.props.getMostPopular(this.props.location.search);
  }

  render() {
    if (this.props.mostPopular.loading || !this.props.mostPopular.loaded) {
      return 'Loading';
    }

    return (
      <div className="container">
        <h2>Most Popular</h2>
        <MovieList
          currentPage={this.props.mostPopular.data.page}
          movies={this.props.mostPopular.data.results}
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
