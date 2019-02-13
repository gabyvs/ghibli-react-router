import React           from 'react';
import './Main.css';
import {Route, Switch} from 'react-router-dom';
import Movies          from './Movies';
import People          from './People';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" render={() => (
        <>
          <div className="welcome">Welcome to Ghibli studios!</div>
          <div className="content">Feel free to navigate from our top menu</div>
        </>
      )} />
      <Route path="/movies" component={Movies}/>
      <Route path="/people" component={People}></Route>
    </Switch>
  </main>
);

export default Main;