import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//1. In order to use react with redux we need react-redux :)
//this is our glue betwee  react and redux
import { Provider } from 'react-redux';
//2. create a redux store so that:
//2.1. Redux exists
//2.2. The provider has that store
import { createStore } from 'redux';

//3. We need reducers to populate the strores
//3.1. reducers go into the store
//3.2. Make individual reducers to go into the rootreducer
import rootReducer from './reducers/rootReducer';// typically this might be called index.js but this is Rob trying negate confusion for us

//4. actually create the store:)
//by passing it the rootreducer
// which is made up of the individual reducers 
const aPublix = createStore(rootReducer);

// Provider step1. is the component that glues React and Redux togteher
// we hand the provider to the REactDOM.render
// and we ahnd the provider a prop of store with our store


ReactDOM.render(
  <Provider store={aPublix}>
    <App />
  </Provider>, 
  document.getElementById('root')
);


