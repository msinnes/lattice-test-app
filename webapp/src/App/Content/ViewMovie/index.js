import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovie } from '../../../redux/ducks';

import Poster from '../shared-components/Poster';

class ViewMovie extends Component {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  render() {
    if (this.props.movie.loading || !this.props.movie.loaded) {
      return 'Loading';
    }
    const movieData = this.props.movie.data;
    console.log(movieData);
    return (
      <div className="container">
        <h2>{movieData.title}</h2>
        <div className="row">
          <div className="col-md-6">
            <Poster
              movieTitle={movieData.title}
              path={movieData.poster_path}
              width={500}
            />
          </div>
          <div className="col-md-6">
            <ul>
              <li><strong>Title:</strong> {movieData.title}</li>
              <li><strong>Released:</strong> {movieData.release_date}</li>
              {movieData.genres && <li><strong>Genre:</strong> {movieData.genres.map(genre => genre.name).join(', ')}</li>}
            </ul>
            <h4>Synopsis</h4>
            <div>
              {movieData.overview}
            </div>
          </div>
        </div>
        <h4>Cast</h4>
        <div className="row">
          <div className="list-group">
            {movieData.credits.cast.map(cast => (
              <div className="list-group-item" key={cast.id}>
                <div className="row">
                  <div className="col-md-2">
                    {cast.profile_path ? (
                      <img
                        style={{ width: '80%' }}
                        src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                        alt={`${cast.name} Profile`}
                      />
                    ) : null}
                  </div>
                  <div className="col-md-10">
                    <ul>
                      <li>Character: {cast.character}</li>
                      <li>Name: {cast.name}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie.toJS(),
});

const mapDispatchToProps = dispatch => ({
  getMovie: id => dispatch(getMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewMovie);
