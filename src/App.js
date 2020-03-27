import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import LoggedOut from './components/LoggedOut';
import Error from './components/Error';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/logowanie/" component={Login} />
        <Route exact path="/rejestracja/" component={Register} />
        <Route exact path="/wylogowano/" component={LoggedOut} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;




