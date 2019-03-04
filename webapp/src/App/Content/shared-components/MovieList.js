import React from 'react';
import PropTypes from 'prop-types';

import Pagination from './Pagination';
import Poster from './Poster';

const MovieList = ({ currentPage, movies, totalPages }) => (
  <div className="container">
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
    />
    <div className="list-group">
      {movies.map(movie => (
          <div
            key={movie.id}
            className="list-group-item"
          >
            <a href={`/movie/${movie.id}`}>
              <div className="row">
                <div className="col-md-2">
                  {movie.poster_path ? (
                    <Poster
                      movieTitle={movie.title}
                      path={movie.poster_path}
                      width={500}
                    />
                  ) : null}
                </div>
                <div className="col-md-10">
                  <ul>
                    <li>Title: {movie.title}</li>
                    <li>Released: {movie.release_date}</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        )
      )}
    </div>
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
    />
  </div>
);

MovieList.propTypes = {
  currentPage: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  totalPages: PropTypes.number.isRequired,
};

export default MovieList;
