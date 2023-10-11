import { configureStore } from "@reduxjs/toolkit";
import { socketMiddleware } from "./middleware";
import { rootReducer } from "./reducers/index"; 

import { wsConnection as feedConnect, 
        wsConnectionClosed as feedWsClose, 
        wsConnectionError as feedWsError, 
        wsConnectionSuccess as feedWsOpen, 
        wsGetMessage as feedWsMessage, 
        wsDisconnect as feedWsDisconnect, 
        wsConnecting as feedWsConnecting
} from "./actions/feedActions"; 

import { wsConnection as ordersConnect, 
    wsConnectionClosed as ordersWsClose, 
    wsConnectionError as ordersWsError, 
    wsConnectionSuccess as ordersWsOpen, 
    wsGetMessage as ordersWsMessage, 
    wsDisconnect as ordersWsDisconnect, 
    wsConnecting as ordersWsConnecting
} from "./actions/ordersActions"; 



const feedMiddleWare = socketMiddleware({
    wsConnection: feedConnect,
    wsConnectionClosed: feedWsClose,
    wsConnectionError: feedWsError,
    wsConnectionSuccess: feedWsOpen,
    wsGetMessage: feedWsMessage,
    wsDisconnect: feedWsDisconnect,
    wsConnecting: feedWsConnecting,
})

const ordersMiddleWare = socketMiddleware({
    wsConnection: ordersConnect,
    wsConnectionClosed: ordersWsClose,
    wsConnectionError: ordersWsError,
    wsConnectionSuccess: ordersWsOpen,
    wsGetMessage: ordersWsMessage,
    wsDisconnect: ordersWsDisconnect,
    wsConnecting: ordersWsConnecting,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(feedMiddleWare, ordersMiddleWare)
})