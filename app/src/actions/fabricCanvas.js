import { createAction } from 'redux-actions';
import * as types from '../constants/actionTypes';

export const initialize = createAction(types.CANVAS_INITIALIZE);
export const refresh = createAction(types.CANVAS_REFRESH);

export const modified = event => ({ type: types.OBJECT_MODIFIED, payload: event.target });

export const addObject = obj => (dispatch, getState) => {
  const fabricCanvas = getState().fabricCanvas;
  fabricCanvas.add(obj);
  fabricCanvas.setActiveObject(obj);
  dispatch({ type: types.ADD_OBJECT, payload: fabricCanvas });
};

export const setTop = value => (dispatch, getState) => {
  dispatch({ type: types.OBJECT_SET_TOP, payload: value });
  dispatch({ type: types.CANVAS_REFRESH });
};


