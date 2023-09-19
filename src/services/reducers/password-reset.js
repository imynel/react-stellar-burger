import { useNavigate } from "react-router-dom";
import { POST_EMAIL_FAILED, POST_EMAIL_REQUEST, POST_EMAIL_SUCCESS } from "../actions/password-reset";

const initialState = {
    info: null,
    passwordRequest: false,
    passwordFailed: false
}

export const passwordReducer = (store = initialState, action) => {
    switch(action.type) {
        case POST_EMAIL_REQUEST: {
            return {
                ...store, passwordRequest: true, passwordFailed: false,
            }
        }

        case POST_EMAIL_SUCCESS: {
            return {
                ...store, passwordRequest: false, passwordFailed: false, info: action.payload
            }
        }

        case POST_EMAIL_FAILED: {
            return {
                ...store, passwordFailed: true, passwordRequest: false
            }
        }
        default: {
            return store
        }
    }
}