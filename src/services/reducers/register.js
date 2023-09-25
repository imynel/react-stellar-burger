import { POST_REGISTER_FAILED, POST_REGISTER_SUCCESS, POST_REGISTER_REQUEST, SET_AUTH_CHECKED, SET_USER } from "../actions/register";

const initialState = {
    email: '',
    name: '',
    accessToken: '',
    refreshToken: '',
    registerRequest: false,
    registerFailed: false,
    isAuthChecked: false,
    user: null,
}

export const registerReducer = (store = initialState, action) => {
    switch(action.type) {
        case SET_USER: {
            return {
                ...store, user: action.payload
            }
        }

        case SET_AUTH_CHECKED: {
            return {
                ...store, isAuthChecked: action.payload,
            }
        }

        case POST_REGISTER_REQUEST: {
            return {
                ...store, registerRequest: true, registerFailed: false, 
            }
        }

        case POST_REGISTER_SUCCESS: {
            return {
                ...store, 
                registerRequest: false, 
                registerFailed: false, 
                name: action.payload.user.name, 
                email: action.payload.user.email, 
                accessToken: action.payload.accessToken, 
                refreshToken: action.payload.refreshToken
            }
        }

        case POST_REGISTER_FAILED: {
            return {
                ...store, registerRequest: false, registerFailed: true,
            }
        }

        default: {
            return store
        }
    }
}