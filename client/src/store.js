import  promiseMiddleware  from 'redux-promise';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, promiseMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;