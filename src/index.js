import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import managePostsAndComments from './reducers/managePostsAndComments';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(managePostsAndComments, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


