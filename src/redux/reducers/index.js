import { combineReducers } from "redux";
import { poductReducer } from './poductReducer';


export const rootReducer= combineReducers({
    products:poductReducer
})