import { combineReducers } from "redux";
import countDownReducer from './countDownReducer';

const rootReducer = combineReducers({ countDownReducer });

export default rootReducer;