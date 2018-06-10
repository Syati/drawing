import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import fabricMiddleware from '../middleware/fabricMiddleware';
import keyboardMiddleware from '../middleware/keyboardMiddleware';
import rootReducer from '../reducers';
import DevTools from '../containers/Root/DevTools';


const enhancer = compose(
  applyMiddleware(
      fabricMiddleware,
      keyboardMiddleware,
      thunk
  ),
  DevTools.instrument()
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}

