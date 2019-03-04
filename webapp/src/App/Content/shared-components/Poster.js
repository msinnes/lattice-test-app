import React from 'react';
import PropTypes from 'prop-types';

const Poster = ({ path, movieTitle, width }) => (
  <img
    style={{ width: '100%' }}
    src={`https://image.tmdb.org/t/p/w${width}${path}`}
    alt={`${movieTitle} Poster`}
  />
);

Poster.propTypes = {
  path: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  movieTitle: PropTypes.string,
};

Poster.defaultProps = {
  movieTitle: 'Movie',
};

export default Poster;
