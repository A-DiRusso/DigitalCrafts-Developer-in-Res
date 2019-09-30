import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import index from './reducers/index';
import reduxThunk from 'redux-thunk';

const reduxMiddleware = [reduxPromise, reduxThunk]
const theStore = applyMiddleware(...reduxMiddleware)(createStore)(index);


ReactDOM.render(
  <Provider store={theStore} >
    <App />
  </Provider>,
  document.getElementById('root')
);


