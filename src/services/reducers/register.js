import { POST_REGISTER_FAILED, POST_REGISTER_SUCCESS, POST_REGISTER_REQUEST } from "../actions/register";

const initialState = {
    email: '',
    name: '',
    accessToken: '',
    refreshToken: '',
    registerRequest: false,
    registerFailed: false,
}

export const registerReducer = (store = initialState, action) => {
    switch(action.type) {
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