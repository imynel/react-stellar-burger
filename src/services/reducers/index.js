import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { constructorReducer } from "./constructor";
import { passwordReducer } from "./password-reset";

export const rootReducer = combineReducers({
    ingredientsReducer,
    constructorReducer,
    passwordReducer,
})