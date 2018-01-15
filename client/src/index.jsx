/* eslint-disable no-unused-vars */
import React from 'react';
import jwtDecode from 'jwt-decode';
import registerObserver from 'react-perf-devtool';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';
import setAuthToken from './utils/setAuthToken';
import { signInUserSuccess } from './actions/authAction';
import '../public/js/custom';
import './index.scss';

import routes from './routes';

registerObserver();


if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  store.dispatch(signInUserSuccess(jwtDecode(localStorage.jwtToken)));
}

render(
  <Provider store={store}>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>, document.getElementById('root')
);
