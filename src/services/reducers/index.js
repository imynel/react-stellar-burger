import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { constructorReducer } from "./constructor";
import { passwordReducer } from "./password-reset";
import { registerReducer } from './register'
import { feedReducer } from "./feedReducer";
import { ordersReducer } from './ordersReducer'

export const rootReducer = combineReducers({
    ingredientsReducer,
    constructorReducer,
    passwordReducer,
    registerReducer,
    feedReducer,
    ordersReducer,
})