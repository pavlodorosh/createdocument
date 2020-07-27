import { combineReducers } from 'redux';
import stepReducer from './stepsReducer';
import allInformation from './allInformation';

export default combineReducers({
    stepReducer,
    allInformation
});
