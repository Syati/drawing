import * as types from '../../constants/actionTypes'

const fabricMiddleware = store => next => action => {
    if (action.type in fabricWrapper) {
        fabricWrapper[action.type](store, action.payload)
    }
    next(action)
}

const fabricWrapper = {
    [types.ADD_OBJECT]: (store, payload) => {
        const canvas = store.getState().fabricCanvas;
        canvas.add(payload);
        canvas.setActiveObject(payload);
    },
    [types.CANVAS_REFRESH]: (store, payload) => {
        const canvas = store.getState().fabricCanvas;
        canvas.renderAll()
    }
}



export default fabricMiddleware;