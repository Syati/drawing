import { handleActions } from 'redux-actions';
import * as types from '../constants/actionTypes';

import { fabric } from 'fabric';
const initialState = new fabric.Canvas();

export default handleActions({
  [types.CANVAS_INITIALIZE]: (state, action) => {
    return state.initialize(action.payload.element, {
      height: action.payload.height,
      width: action.payload.width,
    });
  },
  [types.CANVAS_REFRESH]: (state, action) => {
    return state.renderAll();
  },
  [types.ADD_OBJECT]: (state, action) => {
    return state;
  },
}, initialState);
