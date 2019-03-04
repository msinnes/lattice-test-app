import React from 'react';

import Poster from './Poster';

const MovieList = ({ movies }) => (
  <div className="list-group">
    {movies.map(movie => (
        <div
          key={movie.id}
          className="list-group-item"
        >
          <a href={`/movie/${movie.id}`}>
            <div className="row">
              <div className="col-md-2">
                <Poster
                  movieTitle={movie.title}
                  path={movie.poster_path}
                  width={500}
                />
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
);

export default MovieList;
