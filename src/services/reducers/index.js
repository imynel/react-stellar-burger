import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { constructorReducer } from "./constructor";


export const rootReducer = combineReducers({
    ingredientsReducer,
    constructorReducer,
})