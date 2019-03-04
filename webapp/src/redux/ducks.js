import axios from 'axios';
import querystring from 'query-string';

import { combineReducers } from 'redux';

import getApiReducer from './getApiReducer';
import getStore from './getStore';

// Constants
const apiAddress = 'http://localhost:8000';
const URLS = {
  MOST_POPULAR: `${apiAddress}/popular`,
};
const GET_MOST_POPULAR = 'GET_MOST_POPULAR';

// Utilities
const appendQuerystring = (baseUrl, query) => {
  return `${baseUrl}${query ? `?${querystring.stringify(query)}` : ''}`
};

// Reducers
const mostPopular = getApiReducer(GET_MOST_POPULAR);

// Actions
export const getMostPopular = query => ({
  type: GET_MOST_POPULAR,
  promise: axios.get(appendQuerystring(URLS.MOST_POPULAR, query)),
});

const rootReducer = {
  mostPopular,
};

export const store = getStore(combineReducers(rootReducer));
