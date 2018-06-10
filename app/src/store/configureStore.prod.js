import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import fabricMiddleware from '../middleware/fabricMiddleware';
import rootReducer from '../reducers';


const enhancer = compose(
  applyMiddleware(
      fabricMiddleware,
      thunk
  ),
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
