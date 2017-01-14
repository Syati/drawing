import React from 'react';
import { render } from 'react-dom';

import App from './containers/App';
import configureStore from './store';

const store = configureStore({});
const rootElement = document.getElementById('app');

render(
  <App store={store} />,
  rootElement
);
