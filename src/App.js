import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import HomeUser from './components/HomeUser';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import LoggedOut from './components/LoggedOut';
import Error from './components/Error';
import fire from './config/Fire';

export default class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
      <>
        {this.state.user ?
          (<Switch>
            <Route exact path="/" component={HomeUser} />
            <Route exact path="/logowanie/" component={LoginPage} />
            <Route exact path="/rejestracja/" component={RegisterPage} />
            <Route exact path="/wylogowano/" component={LoggedOut} />
            <Route component={Error} />
          </Switch>)
          : (
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/logowanie/" component={LoginPage} />
              <Route exact path="/rejestracja/" component={RegisterPage} />
              <Route exact path="/wylogowano/" component={LoggedOut} />
              <Route component={Error} />
            </Switch>
          )}
      </>
    )
  }
}


