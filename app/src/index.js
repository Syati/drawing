import React from 'react';
import { render } from 'react-dom';

import App from './containers/App';
import configureStore from './store';


const initialState = {};
const store = configureStore(initialState);
const rootElement = document.getElementById('app');

render(
  <App store={store} />,
  rootElement
);
