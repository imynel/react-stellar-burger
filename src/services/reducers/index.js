import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { constructorReducer } from "./constructor";
import { passwordReducer } from "./password-reset";
import { registerReducer } from './register'

export const rootReducer = combineReducers({
    ingredientsReducer,
    constructorReducer,
    passwordReducer,
    registerReducer,
})