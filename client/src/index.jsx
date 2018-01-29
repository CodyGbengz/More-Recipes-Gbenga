/* eslint-disable no-unused-vars */
import React from 'react';
import jwtDecode from 'jwt-decode';
import $ from 'jquery';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import 'materialize-css/dist/js/materialize.min';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { signInUserSuccess } from './actions/authAction';
import '../src/scss/materialize.scss';


import routes from './routes';


if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  store.dispatch(signInUserSuccess(jwtDecode(localStorage.jwtToken)));
}

render(
  <Provider store={store}>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>, document.getElementById('root')
);
