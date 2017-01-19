import { handleActions } from 'redux-actions';
import * as types from '../constants/actionTypes';

import { fabric } from 'fabric';
const initialState = new fabric.Canvas();

export default handleActions({
  [types.CANVAS_INITIALIZE]: (state, action) => state,
  [types.CANVAS_REFRESH]: (state, action) => state.renderAll(),
  [types.ADD_OBJECT]: (state, action) => state,
}, initialState);
