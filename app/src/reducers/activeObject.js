import { handleActions } from 'redux-actions';
import * as types from '../constants/actionTypes';

export default handleActions({
  [types.OBJECT_SELECTED]: (state, action) => action.payload,
  [types.OBJECT_MOVING]: (state, action) => action.payload,
  [types.OBJECT_MODIFIED]: (state, action) => action.payload,
}, { activeObject: null });
