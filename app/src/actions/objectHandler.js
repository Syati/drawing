import { createAction } from 'redux-actions';
import * as types from '../constants/actionTypes';


export const selected = event => ({ type: types.OBJECT_SELECTED, payload: event.target });
export const moving = event => ({ type: types.OBJECT_MOVING, payload: event.target });
export const modified = event => ({ type: types.OBJECT_MODIFIED, payload: event.target });
