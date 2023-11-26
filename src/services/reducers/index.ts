import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { constructorReducer } from "./constructor";
import { passwordReducer } from "./password-reset";
import { registerReducer } from './register'
import { feedReducer } from './feedReducer'
import { ordersReducer } from './ordersReducer';
import { modalReducer } from "./modal";

export const rootReducer = combineReducers({
    ingredientsReducer,
    constructorReducer,
    passwordReducer,
    registerReducer,
    feedReducer,
    ordersReducer,
    modalReducer
})