import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import MostPopular from './MostPopular';
import SearchResults from './SearchResults';
import ViewMovie from './ViewMovie';

const Content = () => (
  <Switch>
    <Route exact path="/" component={MostPopular} />
    <Route path ="/movie/:id" component={ViewMovie} />
    <Route exact path="/search" component={SearchResults} />
    <Redirect to="/" />
  </Switch>
);

export default Content;
