import { handleActions } from 'redux-actions';
import * as types from '../constants/actionTypes';

export default handleActions({
  [types.OBJECT_SELECTED]: (state, action) => action.payload,
  [types.OBJECT_MOVING]: (state, action) => action.payload,
  [types.OBJECT_MODIFIED]: (state, action) => action.payload,

  [types.OBJECT_SET_LEFT]: (state, action) => {
    return state.setLeft(parseInt(action.payload, 10)).setCoords();
  },
  [types.OBJECT_SET_TOP]: (state, action) => {
    return state.setTop(parseInt(action.payload, 10)).setCoords();
  },
  [types.OBJECT_SET_WIDTH]: (state, action) => {
    return state.setScaleX(parseFloat(action.payload)).setCoords();
  },
  [types.OBJECT_SET_HEIGHT]: (state, action) => {
    return state.setScaleY(parseFloat(action.payload)).setCoords();
  },
}, {});
