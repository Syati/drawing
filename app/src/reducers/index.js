import { combineReducers } from 'redux';

import fabricCanvas from './fabricCanvas';
import activeObject from './activeObject';
import exportObject from './exportObject';

const rootReducers = combineReducers({
  fabricCanvas,
  activeObject,
  exportObject,
});

export default rootReducers;
