import { POST_REGISTER_FAILED, POST_REGISTER_SUCCESS, POST_REGISTER_REQUEST } from "../actions/register";

const initialState = {
    info: null,
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
                ...store, registerRequest: false, registerFailed: false, info: action.payload
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