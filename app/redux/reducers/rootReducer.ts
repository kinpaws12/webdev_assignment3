import { combineReducers } from 'redux';
import eventReducer from './eventReducer/eventReducer';
import authReducer from './authReducer/authReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    events: eventReducer,
    //other reducers
})