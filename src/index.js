import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./scss/main.scss";
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
