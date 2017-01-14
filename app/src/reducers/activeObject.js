import { handleActions } from 'redux-actions';
import * as types from '../constants/ActionTypes';


const initialState = {
  activeObject: null,
};

export default handleActions({
  [types.OBJECT_SELECTED]: (state, action) => {
    return {
      ...state,
      activeObject: action.payload,
    };
  },
 }, initialState);
