import axios from 'axios';

import { combineReducers } from 'redux';

import getApiReducer from './getApiReducer';
import getStore from './getStore';

// Constants
const apiAddress = 'http://localhost:8000';
const URLS = {
  MOST_POPULAR: `${apiAddress}/popular`,
  SEARCH: `${apiAddress}/search`,
};
const GET_MOST_POPULAR = 'GET_MOST_POPULAR';
const GET_SEARCH = 'GET_SEARCH';

// Reducers
const mostPopular = getApiReducer(GET_MOST_POPULAR);
const search = getApiReducer(GET_SEARCH);

// Actions
export const getMostPopular = query => ({
  type: GET_MOST_POPULAR,
  promise: axios.get(`${URLS.MOST_POPULAR}${query}`),
});

export const getSearch = query => ({
  type: GET_SEARCH,
  promise: axios.get(`${URLS.SEARCH}${query}`),
});

const rootReducer = {
  mostPopular,
  search,
};

export const store = getStore(combineReducers(rootReducer));
