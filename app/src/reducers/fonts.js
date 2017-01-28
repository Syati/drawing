import { handleActions } from 'redux-actions';
import * as types from '../constants/actionTypes';

const initialState = {
  active: [],
};

export default handleActions({
  [types.FONTS_INITIALIZE]: (state, action) => state,
  [types.FONTS_ACTIVE]: (state, action) => ({
    ...state,
    active: [...state.active, action.payload],
  }),
}, initialState);
