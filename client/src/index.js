import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Main from './components/Main';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
