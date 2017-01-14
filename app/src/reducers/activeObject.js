import { handleActions } from 'redux-actions';
import * as types from '../constants/actionTypes';


const initialState = {
  activeObject: null,
};

export default handleActions({
  [types.OBJECT_SELECTED]: (state, action) => action.payload,
}, initialState);
