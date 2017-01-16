
import * as types from '../constants/actionTypes';

export const setLeft = value => (dispatch, getState) => {
  dispatch({ type: types.OBJECT_SET_LEFT, payload: value });
  dispatch({ type: types.CANVAS_REFRESH });
};

export const setTop = value => (dispatch, getState) => {
  dispatch({ type: types.OBJECT_SET_TOP, payload: value });
  dispatch({ type: types.CANVAS_REFRESH });
};

export const setWidth = value => (dispatch, getState) => {
  dispatch({ type: types.OBJECT_SET_WIDTH, payload: value });
  dispatch({ type: types.CANVAS_REFRESH });
};

export const setHeight = value => (dispatch, getState) => {
  dispatch({ type: types.OBJECT_SET_HEIGHT, payload: value });
  dispatch({ type: types.CANVAS_REFRESH });
};