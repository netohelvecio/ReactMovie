import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MovieList from './pages/MovieList';
import Movie from './pages/Movie';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MovieList} />
        <Route path="/movie" component={Movie} />
      </Switch>
    </BrowserRouter>
  );
}
