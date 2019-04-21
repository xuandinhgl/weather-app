import {combineReducers} from 'redux';

import weather from './weather';
import loading from './loading';
import error from './error';

const myReducer = combineReducers({
    weather, 
    loading,
    error
});

export default myReducer;