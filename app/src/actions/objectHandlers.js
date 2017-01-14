import * as types from '../constants/actionTypes';

export const selectObject = event => ({ type: types.OBJECT_SELECTED, payload: event.target });
