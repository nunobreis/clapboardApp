import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import store from './store';
import reducers from './modules/movie-search/movie-search.reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  ),
  document.getElementById('root'));
registerServiceWorker();
