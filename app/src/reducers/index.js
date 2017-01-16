import { combineReducers } from 'redux';

import fabricCanvas from './fabricCanvas';
import activeObject from './activeObject';

const rootReducers = combineReducers({
  fabricCanvas,
  activeObject,
});

export default rootReducers;
