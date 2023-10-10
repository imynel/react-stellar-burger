import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE, WS_SEND_MESSAGE } from "../actions/wsActions"

const initialState = {
    wsConnected: false,
    massege: [],
    error: null,
}

export const wsReduser = (store = initialState, action) => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS: {
            return {
                ...store, error: undefined, wsConnected: true,
            }
        }

        case WS_CONNECTION_ERROR: {
            return {
                ...store, error: action.payload, wsConnected: false, 
            }
        }

        case WS_CONNECTION_CLOSED: {
            return {
                ...store, error: undefined, wsConnected: false
            }
        }

        case WS_GET_MESSAGE: {
            return {
                ...store, error: undefined, massege: [...store.massege, action.payload]
            }
        }
    }
}