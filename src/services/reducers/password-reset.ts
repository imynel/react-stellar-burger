import { POST_EMAIL_FAILED, POST_EMAIL_REQUEST, POST_EMAIL_SUCCESS, POST_PASSWORD_FAILED, POST_PASSWORD_REQUEST, POST_PASSWORD_SUCCESS } from "../actions/password-reset";

const initialState = {
    info: null,
    emailRequest: false,
    emailFailed: false,
    passwordRequest: false,
    passwordFailed: false
    
}

export const passwordReducer = (store = initialState, action) => {
    switch(action.type) {
        case POST_EMAIL_REQUEST: {
            return {
                ...store, emailRequest: true, emailFailed: false,
            }
        }

        case POST_EMAIL_SUCCESS: {
            return {
                ...store, emailRequest: false, emailFailed: false, info: action.payload
            }
        }

        case POST_EMAIL_FAILED: {
            return {
                ...store, emailFailed: true, emailRequest: false
            }
        }

        case POST_PASSWORD_REQUEST: {
            return {
                ...store, passwordRequest: true, passwordFailed: false,
            }
        }

        case POST_PASSWORD_SUCCESS: {
            return {
                ...store, passwordRequest: false, passwordFailed: false, info: action.payload
            }
        }

        case POST_PASSWORD_FAILED: {
            return {
                ...store, passwordRequest: false, passwordFailed: true,
            }
        }

        default: {
            return store
        }
    }
}