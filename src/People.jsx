import React           from 'react';
import {Route, Switch} from 'react-router-dom';
import PeopleList      from './PeopleList';
import PeopleDetail    from './PeopleDetail';

const People = () => (
  <Switch>
    <Route exact path="/people/" component={PeopleList}/>
    <Route path="/people/:id" component={PeopleDetail}/>
  </Switch>
);

export default People;