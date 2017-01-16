import { combineReducers } from 'redux';

import fablicCanvas from './fablicCanvas';
import activeObject from './activeObject';

const rootReducers = combineReducers({
  fablicCanvas,
  activeObject,
});

export default rootReducers;