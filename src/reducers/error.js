import { SHOW_ERROR, DISMISS_ERROR } from '../constants/actionTypes';

const inittialState = {
    status : false,
    message: ''
}

const myReducer = (state = inittialState, action) => {
    switch (action.type) {
        case SHOW_ERROR:
            state.status = true;
            state.message = action.message;
           return state;    
        case DISMISS_ERROR:
            state.status = false;
            state.message = '';
           return state;
    
        default:
            return state;
    }
}

export default myReducer;