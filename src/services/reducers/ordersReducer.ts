import { WS_CONNECTING, WS_CONNECTION_CLOSE, WS_CONNECTION_ERROR, WS_CONNECTION_OPEN, WS_GET_MESSAGE} from "../actions/feedActions"
import { WebsocketStatus } from "../../utils/wsStatus";
import { TOrderActions } from "../actions/ordersActions";

type state = {
    status: string
    message: any;
    error: string | null;
    total: number | null;
    totalToday: number | null
}

const initialState: state = {
    status: WebsocketStatus.OFFLINE,
    message: [],
    error: null,
    total: null,
    totalToday: null,
}

export const ordersReducer = (store = initialState, action: TOrderActions) => {
    switch (action.type) {
        case WS_CONNECTING: {
            return {
                ...store, status: WebsocketStatus.CONNECTING,
            }
        }

        case WS_CONNECTION_OPEN: {
            return {
                ...store, status: WebsocketStatus.ONLINE, error: ''
            }
        }

        case WS_CONNECTION_CLOSE: {
                    return {
                        ...store, status: WebsocketStatus.OFFLINE,
                    }
                }

        case WS_CONNECTION_ERROR: {
            return {
                ...store, error: action.payload
            }
        }

        case WS_GET_MESSAGE: {
            return {
                ...store, message: action.payload.orders,
            }
        }

        default: {
            return store
        }
    }
}