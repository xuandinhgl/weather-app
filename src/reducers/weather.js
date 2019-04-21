import * as actionTypes from '../constants/actionTypes';

const initialState = {};
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_WEATHER:
            state = action.data;            
            return state;
        default: return state;
    }
}

export default myReducer;