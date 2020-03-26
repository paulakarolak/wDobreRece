import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import LoggedOut from './components/LoggedOut';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route exact path="/logowanie/" component={Login} />
        <Route exact path="/rejestracja/" component={Register} />
        <Route exact path="/wylogowano/" component={LoggedOut} />
      </Switch>
    </>
  );
}

export default App;




