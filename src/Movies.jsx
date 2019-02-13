import React           from 'react';
import {Route, Switch} from 'react-router-dom';
import MovieList       from './MovieList';
import MovieDetail     from './MovieDetail';

const Movies = () => (
  <Switch>
    <Route exact path="/movies/" component={MovieList}/>
    <Route path="/movies/:id" component={MovieDetail}/>
  </Switch>
);

export default Movies;