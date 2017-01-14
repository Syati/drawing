import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

const enhancer = compose(
  applyMiddleware(),
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
