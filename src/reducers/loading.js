import * as actionTypes from '../constants/actionTypes';

const initialState = false;

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_LOADING:         
            return !state;    
        default:
            return state;
    }
}

export default myReducer;