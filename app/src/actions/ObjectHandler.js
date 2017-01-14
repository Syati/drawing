import * as types from '../constants/ActionTypes';

export const selectObject = event => ({ type: types.OBJECT_SELECTED, payload: event.target });