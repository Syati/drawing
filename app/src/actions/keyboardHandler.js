import { createActions } from 'redux-actions';
import * as types from '../constants/actionTypes';
import { camelCase }  from 'lodash';

const actions = createActions(
    types.KEYBOARD_DELETE,
    types.KEYBOARD_BACKSPACE,
    types.KEYBOARD_PRESSED
);

export const keydown = key => {
    const type = camelCase(`KEYBOARD_${key.toUpperCase()}`);
    if(type in actions) {
        return actions[type]()
    } else {
        return actions[camelCase(types.KEYBOARD_PRESSED)]();
    }
}




