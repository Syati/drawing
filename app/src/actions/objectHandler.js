import { createAction } from 'redux-actions';
import * as types from '../constants/actionTypes';


export const selected = obj => ({ type: types.OBJECT_SELECTED, payload: obj });
export const moving = obj => ({ type: types.OBJECT_MOVING, payload: obj });
export const modified = obj => ({ type: types.OBJECT_MODIFIED, payload: obj });
export const scaling = obj => ({ type: types.OBJECT_SCALING, payload: obj });

