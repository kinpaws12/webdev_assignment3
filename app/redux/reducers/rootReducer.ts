import { combineReducers } from 'redux';
import eventReducer from './eventReducer';

export const rootReducer = combineReducers({
    events: eventReducer,
    //other reducers
})