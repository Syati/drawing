import { combineReducers } from 'redux';

import activeObject from './activeObject';

const rootReducers = combineReducers({
  activeObject,
});

export default rootReducers;