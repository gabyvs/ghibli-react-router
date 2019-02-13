import React           from 'react';
import './Main.css';
import {Route, Switch} from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" render={() => (
        <>
          <div className="welcome">Welcome to Ghibli studios!</div>
          <div className="content">Feel free to navigate from our top menu</div>
        </>
      )} />
    </Switch>
  </main>
);

export default Main;