import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import '../styles/styles.scss';
import App from './components/app.jsx';
import { phraseStats } from './reducers/reducers.js';

let store = createStore(phraseStats);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
document.getElementById('root'));
