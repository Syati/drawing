import * as types from '../../constants/actionTypes'

const keyboardMiddleware = store => next => action => {
    const state = store.getState();
    if (!!state.activeObject.type) {
        if (action.type in activeModeKeymap) {
            activeModeKeymap[action.type](state.fabricCanvas)
        }
    } else {
        if (action.type in defaultModeKeymap) {
            defaultModeKeymap[action.type](state.fabricCanvas)
        }
    }
    next(action);
};

const activeModeKeymap = {
    [types.KEYBOARD_DELETE]: (fabricCanvas) => {
        fabricCanvas.getActiveObject().remove();
    },
    [types.KEYBOARD_BACKSPACE]: (fabricCanvas) => {
        fabricCanvas.getActiveObject().remove();
    }
};

const defaultModeKeymap = {
};


export default keyboardMiddleware;